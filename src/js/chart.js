const stopwordsChart = document.getElementById('stopwords');
    
    new Chart(stopwordsChart, {
        type: 'bar',
        data: {
        labels: ['di', 'il', 'la', 'essere', 'e', 'che', 'in', 'un', 'a', 'avere'],
        datasets: [{
            label: '단어 별 빈도수',
            data: [1210, 1134, 888, 880, 816, 661, 559, 541, 498, 472],
            borderWidth: 1,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            hoverBackgroundColor: 'rgba(75, 192, 192, 0.2)',
            hoverBorderColor: 'rgb(75, 192, 192)',
        }]
        },
        options: {
        scales: {
            y: {
            beginAtZero: true
            }
        }
        }
});
const noStopwordsChart = document.getElementById('noStopwords');
    
    new Chart(noStopwordsChart, {
        type: 'bar',
        data: {
        labels: ['di', 'il', 'la', 'essere', 'e', 'che', 'in', 'un', 'a', 'avere'],
        datasets: [{
            label: '단어 별 빈도수',
            data: [1210, 1134, 888, 880, 816, 661, 559, 541, 498, 472],
            borderWidth: 1,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            hoverBackgroundColor: 'rgba(75, 192, 192, 0.2)',
            hoverBorderColor: 'rgb(75, 192, 192)',
        }]
        },
        options: {
        scales: {
            y: {
            beginAtZero: true
            }
        }
        }
});

const dramaChart = document.getElementById('drama');
    new Chart(dramaChart, {
        type: 'doughnut',
        data: {
        labels: ['오징어게임', '기생충', '파친코', '미나리', '빈센조'],
        datasets: [{
            label: '작품 별 빈도수',
            data: [173, 18, 13, 9, 6],
            borderWidth: 1,
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ],
            borderColor: 'rgb(255, 99, 132)',
            hoverBackgroundColor: 'rgba(75, 192, 192, 0.2)',
            hoverBorderColor: 'rgb(75, 192, 192)',
            hoverOffset: 4
        }]
        },
});


anychart.onDocumentReady(function () {
    var data = [{"x":"serio","value":"259"},{"x":"game","value":"167"},{"x":"squid","value":"154"},{"x":"anno","value":"121"},{"x":"coreano","value":"116"},{"x":"dio","value":"109"},{"x":"netflix","value":"106"},{"x":"giocare","value":"97"},{"x":"potere","value":"91"},{"x":"primo","value":"91"},{"x":"film","value":"86"},{"x":"altro","value":"78"},{"x":"nuovo","value":"68"},{"x":"sempre","value":"65"},{"x":"corea","value":"65"},{"x":"mondare","value":"64"},{"x":"milione","value":"61"},{"x":"tv","value":"61"},{"x":"succedere","value":"58"},{"x":"storia","value":"58"},{"x":"bambino","value":"55"},{"x":"dopo","value":"54"},{"x":"dovere","value":"54"},{"x":"vistare","value":"53"},{"x":"tempo","value":"52"},{"x":"partire","value":"52"},{"x":"venire","value":"49"},{"x":"raccontare","value":"49"},{"x":"proprio","value":"48"},{"x":"dire","value":"47"},{"x":"dare","value":"46"},{"x":"paese","value":"45"},{"x":"due","value":"45"},{"x":"k","value":"45"},{"x":"sudcoreano","value":"44"},{"x":"diventare","value":"44"},{"x":"vincere","value":"44"},{"x":"cinema","value":"44"},{"x":"mentre","value":"43"},{"x":"parlare","value":"43"},{"x":"così","value":"43"},{"x":"piattaforma","value":"42"},{"x":"giorno","value":"42"},{"x":"vita","value":"42"},{"x":"stesso","value":"42"},{"x":"d","value":"41"},{"x":"solere","value":"40"},{"x":"lingua","value":"40"},{"x":"spiegare","value":"40"},{"x":"oggi","value":"39"},{"x":"persona","value":"37"},{"x":"gioco","value":"37"},{"x":"volere","value":"37"},{"x":"quando","value":"37"},{"x":"cosa","value":"37"},{"x":"pop","value":"36"},{"x":"fino","value":"36"},{"x":"mettere","value":"35"},{"x":"jung","value":"35"},{"x":"perdere","value":"33"},{"x":"pensare","value":"33"},{"x":"pubblicare","value":"33"},{"x":"protagonista","value":"33"},{"x":"cultura","value":"32"},{"x":"piccolo","value":"32"},{"x":"volto","value":"32"},{"x":"senza","value":"31"},{"x":"stagione","value":"31"},{"x":"arrivare","value":"31"},{"x":"vedere","value":"31"},{"x":"ancorare","value":"30"},{"x":"poi","value":"30"}]

    var chart = anychart.tagCloud(data);
    chart.angles([-90, 0, 90]);

    chart.container("wordcloud");
    // chart.getCredits().setEnabled(false);
    chart.draw();
});
