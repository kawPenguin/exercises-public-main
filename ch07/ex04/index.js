const data = [
    { name: "Alice", class: "A", math: 10, chemistry: 30, geography: 20 },
    { name: "Bob", class: "A", math: 50, chemistry: 50, geography: 60 },
    { name: "Carol", class: "A", math: 70, chemistry: 55, geography: 30 },
    { name: "Dave", class: "B", math: 40, chemistry: 20, geography: 60 },
    { name: "Ellen", class: "B", math: 60, chemistry: 70, geography: 40 },
    { name: "Frank", class: "B", math: 90, chemistry: 70, geography: 80 },
    { name: "Isaac", class: "C", math: 70, chemistry: 40, geography: 50 },
    { name: "Justin", class: "C", math: 80, chemistry: 40, geography: 30 },
    { name: "Mallet", class: "C", math: 60, chemistry: 70, geography: 90 },
];

const totalMathScore = data
    .map(student => student.math)
    .reduce((sum, score) => sum + score, 0);

const classAChemistry = data
    .filter(student => student.class === "A")
    .map(student => student.chemistry);
const averageClassAChemistry = classAChemistry
    .reduce((sum, score) => sum + score, 0) / classAChemistry.length;

const classCTotalScores = data
    .filter(student => student.class === "C")
    .map(student => student.math + student.chemistry + student.geography);
const averageClassCTotal = classCTotalScores
    .reduce((sum, total) => sum + total, 0) / classCTotalScores.length;


const studentWithMaxTotal = data
    .map(student => ({
        name: student.name,
        total: student.math + student.chemistry + student.geography
    }))
    .reduce((max, current) => current.total > max.total ? current : max);

const geographyScores = data.map(student => student.geography);
const averageGeography = geographyScores
    .reduce((sum, score) => sum + score, 0) / geographyScores.length;

const variance = geographyScores
    .map(score => Math.pow(score - averageGeography, 2))
    .reduce((sum, squaredDiff) => sum + squaredDiff, 0) / geographyScores.length;
const standardDeviation = Math.sqrt(variance);

console.log(totalMathScore); //530
console.log(averageClassAChemistry); //45
console.log(averageClassCTotal); //176.66666666666666
console.log(studentWithMaxTotal.name); //Frank
console.log(standardDeviation); //22.3330569358242