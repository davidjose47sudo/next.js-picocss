import styles from '../../styles/graph.module.css'
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import {
    Chart,
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip,
    DatasetController
} from 'chart.js';
import { graphdataDuonunt, graphdataBar, graphdataLine, Linemix } from '@/types/graph_chart';
Chart.register(
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip
);

export const options = {
    responsive: true,
    interaction: {
        mode: 'index' as const,
        intersect: false,
    },
    stacked: false,
    plugins: {
        title: {
            display: true,
            text: 'Chart.js Line Chart - Multi Axis',
        },
    },
    scales: {
        y: {
            type: 'linear' as const,
            display: true,
            position: 'left' as const,
        },
        y1: {
            type: 'linear' as const,
            display: true,
            position: 'right' as const,
            grid: {
                drawOnChartArea: false,
            },
        },
    },
};



export const LineChart = (config: graphdataLine) => {
    return <Line className={styles.Line} data={config} />;
};
export const BarChart = (config: graphdataBar) => {
    return <Bar className={styles.Bar} data={config} />;
};
export const DoughnutChart = (config: graphdataDuonunt) => {
    return <Doughnut className={styles.Doughnut} data={config} />;
};

export const LineP = (config:any) => {
    return <Line className={styles.Mixed} options={options} data={config} /> //este error se ignora porque en la doc del chart esta bien nose porque marca error
};


