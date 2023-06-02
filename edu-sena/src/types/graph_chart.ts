export interface graphdataLine {
    labels: string[],
    datasets: [
        {
            label: string,
            data: number[],
            fill: boolean,
            borderColor: string,
            tension: number,
        },
    ],
};

export interface graphdataDuonunt {
    labels: string[],
    datasets: [
        {
            label: string,
            data: number[],
            fill: boolean,
            backgroundColor: string[],
            hoverOffset: number
        },
    ],
};

export interface graphdataMixte {
    labels: string[],
    datasets: [
        {
            label: string,
            data: number[],
            type: string,
            fill: false,
            borderColor: string,
            tension: number,
        },
        {
            label: string,
            data: number[],
            type: string,
            backgroundColor: string,
        },
    ],
};

export interface graphdataBar {
    labels:string[],
    datasets: [{
        label: string,
        data: number[],
        backgroundColor: string[],
        borderColor: string[],
        borderWidth: number
    }]
};