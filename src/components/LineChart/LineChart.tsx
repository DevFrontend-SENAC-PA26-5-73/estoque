// Gráfico de linha feito com SVG puro (sem biblioteca externa).
// Se quiser algo mais avançado depois, dá para trocar por Recharts / Chart.js.
import type { PontoGrafico } from '../../data/mock'
import './LineChart.css'

interface LineChartProps {
  dados: PontoGrafico[]
  maximo?: number // valor máximo do eixo Y (padrão 40.000)
  passo?: number  // distância entre as linhas de grade (padrão 10.000)
}

// Tamanho "lógico" do desenho. O SVG se ajusta à largura do card via viewBox.
const LARGURA = 600
const ALTURA = 260
const MARGEM = { topo: 15, direita: 20, baixo: 30, esquerda: 45 }

function LineChart({ dados, maximo = 40000, passo = 10000 }: LineChartProps) {
  const areaL = LARGURA - MARGEM.esquerda - MARGEM.direita
  const areaA = ALTURA - MARGEM.topo - MARGEM.baixo

  // Converte um valor de dados para coordenada Y (0 fica embaixo, "maximo" em cima)
  const y = (valor: number) => MARGEM.topo + areaA - (valor / maximo) * areaA

  // Posição X de cada ponto, espaçados igualmente
  const x = (indice: number) =>
    MARGEM.esquerda + (dados.length > 1 ? (indice / (dados.length - 1)) * areaL : 0)

  // Linhas de grade horizontais: 0, 10k, 20k, 30k, 40k
  const marcas: number[] = []
  for (let v = 0; v <= maximo; v += passo) marcas.push(v)

  // Texto "x,y x,y ..." usado pelo <polyline>
  const pontos = dados.map((d, i) => `${x(i)},${y(d.valor)}`).join(' ')

  return (
    <svg className="line-chart" viewBox={`0 0 ${LARGURA} ${ALTURA}`} role="img" aria-label="Gráfico de vendas">
      {/* Grade e rótulos do eixo Y */}
      {marcas.map((v) => (
        <g key={v}>
          <line x1={MARGEM.esquerda} x2={LARGURA - MARGEM.direita} y1={y(v)} y2={y(v)} className="line-chart-grade" />
          <text x={MARGEM.esquerda - 8} y={y(v) + 4} textAnchor="end" className="line-chart-texto">
            {v === 0 ? '0' : `${v / 1000}k`}
          </text>
        </g>
      ))}

      {/* Linha do gráfico */}
      <polyline points={pontos} className="line-chart-linha" />

      {/* Bolinhas + rótulos do eixo X (meses) */}
      {dados.map((d, i) => (
        <g key={d.rotulo}>
          <circle cx={x(i)} cy={y(d.valor)} r={4} className="line-chart-ponto">
            {/* Tooltip nativo ao passar o mouse */}
            <title>{`${d.rotulo}: R$ ${d.valor.toLocaleString('pt-BR')}`}</title>
          </circle>
          <text x={x(i)} y={ALTURA - 8} textAnchor="middle" className="line-chart-texto">
            {d.rotulo}
          </text>
        </g>
      ))}
    </svg>
  )
}

export default LineChart
