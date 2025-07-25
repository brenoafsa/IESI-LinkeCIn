import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend)

const PieChart = ({ dadosCursos }) => {
  if (!dadosCursos || Object.keys(dadosCursos).length === 0) {
    return (
      <div 
        className="flex justify-center w-[200px] h-[200px] items-center text-gray-500 rounded-full border-2 border-gray-200"
      >
        <span className="text-sm text-center">Nenhum dado disponível</span>
      </div>
    );
  }

  const chartData = {
    labels: Object.keys(dadosCursos),
    datasets: [{
      label: 'Candidatos por Curso',
      data: Object.values(dadosCursos),
      backgroundColor: [
            'rgba(255, 99, 132, 0.8)',
            'rgba(54, 162, 235, 0.8)',
            'rgba(255, 205, 86, 0.8)',
            'rgba(75, 192, 192, 0.8)',
      ],
      borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 205, 86, 1)',
            'rgba(75, 192, 192, 1)',
      ],
      borderWidth: 2,
    }]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        borderWidth: 1,
        displayColors: true,
        callbacks: {
          label: function(context) {
            const value = context.parsed;
            const total = context.dataset.data.reduce((a, b) => a + b, 0);
            const percentage = total > 0 ? ((value / total) * 100).toFixed(1) : 0;
            return `${value} (${percentage}%)`;
          }
        }
      }
    },
  };

  return (
    <div 
      className="flex justify-center items-center w-[200px] h-[200px]"
    >
      <Doughnut data={chartData} options={options} />
    </div>
  );
};

export default PieChart;