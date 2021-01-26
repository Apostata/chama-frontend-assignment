export const versions: {
    id:string,
    data:string,
    ambiente:string,
    projeto:string,
    majorVersio:string,
    sprintNumber:string,
    buildNumber: string,
    user:string
}[]

=[
    {
        id:"",
        data:"",
        ambiente:"",
        projeto:"",
        majorVersio:"",
        sprintNumber:"",
        buildNumber: "",
        user:""
    }
];

export const versionsColumns: {
        name: string,
        selector: string,
        sortable?: boolean,
        right?: boolean
}[] = [
    {
        name: "Data",
        selector: "data",
        sortable: true,
        right: false
    },
    {
        name: "Ambiente",
        selector: "ambiente",
        sortable: true,
        right: false
    },
    {
        name: "Projeto",
        selector: "projeto",
        sortable: true,
        right: false
    },
    {
        name: "Major Version",
        selector: "majorVersion",
        sortable: true,
        right: false
    },
    {
        name: "Sprint Number",
        selector: "sprintNumber",
        sortable: true,
        right: false
    },
    {
        name: "Build Number",
        selector: "buildNumber",
        sortable: true,
        right: false
    },
    {
        name: "User",
        selector: "user",
        sortable: true,
        right: false
    }
]