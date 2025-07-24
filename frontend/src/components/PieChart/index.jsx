import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend)

const PieChart = ({ dadosCursos }) => {
  if (!dadosCursos || Object.keys(dadosCursos).length === 0) {
    return <div className="flex justify-center items-center h-64 text-gray-500">Nenhum dado disponível</div>;
  }

  // Prepara dados para o gráfico
  const labels = Object.keys(dadosCursos);
  const data = Object.values(dadosCursos);

  const colors = [
    'rgba(255, 99, 132, 0.6)',
    'rgba(54, 162, 235, 0.6)',
    'rgba(255, 205, 86, 0.6)',
    'rgba(75, 192, 192, 0.6)',
    'rgba(153, 102, 255, 0.6)',
    'rgba(255, 159, 64, 0.6)'
  ];

  const borderColors = [
    'rgba(255, 99, 132, 1)',
    'rgba(54, 162, 235, 1)',
    'rgba(255, 205, 86, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(153, 102, 255, 1)',
    'rgba(255, 159, 64, 1)'
  ];

  const chartData = {
    labels: labels,
    datasets: [{
      label: 'Candidatos por Curso',
      data: data,
      backgroundColor: colors.slice(0, labels.length),
      borderColor: borderColors.slice(0, labels.length),
      borderWidth: 1
    }]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            const label = context.label || '';
            const value = context.parsed;
            const total = context.dataset.data.reduce((a, b) => a + b, 0);
            const percentage = total > 0 ? ((value / total) * 100).toFixed(1) : 0;
            return `${label}: ${value} candidatos (${percentage}%)`;
          }
        }
      }
    }
  };

  return (
    <div className="w-full h-64">
      <Pie data={chartData} options={options} />
    </div>
  );
};

export default PieChart;