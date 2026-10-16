document.addEventListener('DOMContentLoaded', () => {
  const ctx = document.getElementById('graficoEvolucao').getContext('2d');

  const anos = ['2026', '2027', '2028', '2029', '2030', '2031', '2032', '2033', '2034', '2035', '2036'];
  const valorFinal = [180, 387, 624.15, 894.94, 1203.22, 1553.28, 1949.82, 2398.08, 2903.83, 3473.45, 4114.00];
  const salario = [1500, 1650, 1815, 1996.50, 2196.15, 2415.77, 2657.34, 2923.08, 3215.38, 3536.92, 3890.61];

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: anos,
      datasets: [
        {
          label: 'Valor Final Acumulado (R$)',
          data: valorFinal,
          borderColor: '#38bdf8',
          backgroundColor: 'rgba(56, 189, 248, 0.15)',
          fill: true,
          tension: 0.3,
          borderWidth: 3,
          pointRadius: 5,
          pointBackgroundColor: '#38bdf8'
        },
        {
          label: 'Evolução Salarial (R$)',
          data: salario,
          borderColor: '#94a3b8',
          borderDash: [5, 5],
          borderWidth: 2,
          pointRadius: 3,
          pointBackgroundColor: '#94a3b8'
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Evolução do Patrimônio e Salário (2026 - 2036)',
          color: '#f8fafc',
          font: { size: 16, weight: 'bold' }
        },
        legend: {
          labels: { color: '#cbd5e1' }
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              return `${context.dataset.label}: R$ ${context.raw.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
            }
          }
        }
      },
      scales: {
        x: {
          ticks: { color: '#94a3b8' },
          grid: { color: '#334155' }
        },
        y: {
          ticks: { color: '#94a3b8' },
          grid: { color: '#334155' }
        }
      }
    }
  });
});
