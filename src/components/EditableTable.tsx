import { useState, useEffect } from 'react';

// Тип для данных таблицы (массив массивов строк)
type TableData = string[][];

// Интерфейс для позиции редактируемой ячейки
interface EditCellPosition {
    row: number | null;
    cell: number | null;
}

function EditableTable() {
    // Состояние таблицы с начальным значением
    const [tableData, setTableData] = useState<TableData>(() => {
        const savedData = localStorage.getItem('tableData');
        return savedData ? JSON.parse(savedData) : [
            ['', ''],
            ['', '']
        ];
    });

    // Состояние для отслеживания редактируемой ячейки
    const [editCell, setEditCell] = useState<EditCellPosition>({
        row: null,
        cell: null
    });

    // Сохраняем данные при каждом изменении
    useEffect(() => {
        localStorage.setItem('tableData', JSON.stringify(tableData));
    }, [tableData]);

    // Обработчик изменения значения в ячейке
    const handleChange = (value: string, rowIndex: number, cellIndex: number) => {
        const newData = tableData.map((row, rIdx) => {
            if (rIdx === rowIndex) {
                return row.map((cell, cIdx) => {
                    return cIdx === cellIndex ? value : cell;
                });
            }
            return row;
        });
        setTableData(newData);
    };

    // Добавление новой строки
    const addRow = () => {
        const newRow = Array(tableData[0].length).fill('');
        setTableData([...tableData, newRow]);
    };

    // Добавление нового столбца
    const addColumn = () => {
        const newData = tableData.map(row => [...row, '']);
        setTableData(newData);
    };

    // Удаление строки
    const deleteRow = (rowIndex: number) => {
        if (tableData.length > 1) {
            const newData = tableData.filter((_, idx) => idx !== rowIndex);
            setTableData(newData);
        }
    };

    // Удаление столбца
    const deleteColumn = (cellIndex: number) => {
        if (tableData[0].length > 1) {
            const newData = tableData.map(row =>
                row.filter((_, idx) => idx !== cellIndex)
            );
            setTableData(newData);
        }
    };

    return (
        <div>
            <div style={{ marginBottom: '10px' }}>
                <button onClick={addRow} style={{ marginRight: '5px' }}>Добавить строку</button>
                <button onClick={addColumn} style={{ marginRight: '5px' }}>Добавить столбец</button>
            </div>

            <table border={1} style={{ borderCollapse: 'collapse' }}>
                <tbody>
                {tableData.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {row.map((cell, cellIndex) => (
                            <td
                                key={cellIndex}
                                onClick={() => setEditCell({ row: rowIndex, cell: cellIndex })}
                                style={{ padding: '8px', position: 'relative' }}
                            >
                                {editCell.row === rowIndex && editCell.cell === cellIndex ? (
                                    <input
                                        type="text"
                                        value={cell}
                                        onChange={(e) => handleChange(e.target.value, rowIndex, cellIndex)}
                                        autoFocus
                                        onBlur={() => setEditCell({ row: null, cell: null })}
                                        style={{ width: '90%' }}
                                    />
                                ) : (
                                    cell || <span style={{ color: '#aaa' }}>пусто</span>
                                )}
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        deleteColumn(cellIndex);
                                    }}
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        right: 0,
                                        fontSize: '10px',
                                        padding: '2px 5px'
                                    }}
                                >
                                    ×
                                </button>
                            </td>
                        ))}
                        <td>
                            <button
                                onClick={() => deleteRow(rowIndex)}
                                style={{ marginLeft: '5px' }}
                            >
                                Удалить строку
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default EditableTable;