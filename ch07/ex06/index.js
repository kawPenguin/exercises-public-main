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

// mathの点数が高い順、同点の場合はchemistryが高い順、さらに同点の場合はgeographyが高い順にソート
const sortedData = data.sort((a, b) => {
    // まずmathで比較（降順）
    if (b.math !== a.math) {
        return b.math - a.math;
    }
    
    // mathが同じ場合、chemistryで比較（降順）
    if (b.chemistry !== a.chemistry) {
        return b.chemistry - a.chemistry;
    }
    
    // mathとchemistryが同じ場合、geographyで比較（降順）
    return b.geography - a.geography;
});

console.log("ソート結果:");
console.table(sortedData);

/**
┌─────────┬──────────┬───────┬──────┬───────────┬───────────┐
│ (index) │ name     │ class │ math │ chemistry │ geography │
├─────────┼──────────┼───────┼──────┼───────────┼───────────┤
│ 0       │ 'Frank'  │ 'B'   │ 90   │ 70        │ 80        │
│ 1       │ 'Justin' │ 'C'   │ 80   │ 40        │ 30        │
│ 2       │ 'Carol'  │ 'A'   │ 70   │ 55        │ 30        │
│ 3       │ 'Isaac'  │ 'C'   │ 70   │ 40        │ 50        │
│ 4       │ 'Mallet' │ 'C'   │ 60   │ 70        │ 90        │
│ 5       │ 'Ellen'  │ 'B'   │ 60   │ 70        │ 40        │
│ 6       │ 'Bob'    │ 'A'   │ 50   │ 50        │ 60        │
│ 7       │ 'Dave'   │ 'B'   │ 40   │ 20        │ 60        │
│ 8       │ 'Alice'  │ 'A'   │ 10   │ 30        │ 20        │
└─────────┴──────────┴───────┴──────┴───────────┴───────────┘
 */