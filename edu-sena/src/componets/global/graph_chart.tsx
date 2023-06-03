"use client"
import styles from '../../styles/graph.module.css'
import { Bar, Doughnut, Line, Scatter } from 'react-chartjs-2';
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
    Tooltip
} from 'chart.js';
import { graphdataDuonunt, graphdataMixte, graphdataBar, graphdataLine } from '@/types/graph_chart';
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

export const LineChart = (config: graphdataLine) => {
    return <Line className={styles.Line} data={config} />;
};
export const BarChart = (config: graphdataBar) => {
    return <Bar className={styles.Bar} data={config} />;
};
export const DoughnutChart = (config: graphdataDuonunt) => {
    return <Doughnut className={styles.Doughnut}  data={config} />;
};
export const MixedChart = (config: graphdataMixte) => {
    return <Bar className={styles.Mixed}  data={config} />; //este error se ignora porque en la doc del chart esta bien nose porque marca error
};


