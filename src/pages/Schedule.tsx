import {useState} from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

import './Sample.css';
import EditableTable from "../components/EditableTable.tsx";


const Schedule = () => {

    const [value, onChange] = useState(new Date());

    return (
        <div>
            <div>
                <div className="Sample">
                    <header>
                        <h1>Расписание уроков</h1>
                    </header>
                    <div className="Sample__container">
                        <main className="Sample__container__content">
                            <Calendar onChange={onChange} showWeekNumbers value={value}/>
                        </main>
                    </div>
                </div>
            </div>
            <EditableTable/>
        </div>
    );
};

export default Schedule;
