import { useState } from "react";
import { Collapse, Table } from "react-bootstrap";
import './job-search-table.scss';

interface IResponse {
  "title": string,
  "requirements": string[],
  "responseTime": string,
  "date": string,
  "result": string,
  "feedback": string[]
};

interface IVac {
  "name": string,
  "date": string,
  "responses": IResponse[]
}

const VAC: IVac[] = [
  {
    "name": "Modsen",
    "date": "10.02.2024",
    "responses": [
      {
        "title": "Trainee JS (React) Developer",
        "requirements": [
          "Уверенные знания JS Core",
          "Знание и применение базовых принципов ООP, Solid, DRY/KISS/YAGNI",
          "Уверенные знания HTTP",
          "Работа с системами контроля версий(Git)",
          "Знание Browsers: DOM, BOM, Events",
          "Опыт решения задач Codewars (level 4-6)",
          "Уровень английского не ниже B1 (Intermediate)",
        ],
        "date": "10.02.2024",
        "responseTime": "2 days",
        "result": 'Reject',
        "feedback": []
      },
      {
        "title": "Trainee JS (React) Developer",
        "requirements": [
          "Уверенные знания JS Core",
          "Знание и применение базовых принципов ООP, Solid, DRY/KISS/YAGNI",
          "Уверенные знания HTTP",
          "Работа с системами контроля версий(Git)",
          "Знание Browsers: DOM, BOM, Events",
          "Опыт решения задач Codewars (level 4-6)",
          "Уровень английского не ниже B1 (Intermediate)",
        ],
        "date": "10.02.2024",
        "responseTime": "2 days",
        "result": 'Reject',
        "feedback": []
      },
      {
        "title": "Trainee JS (React) Developer",
        "requirements": [
          "Уверенные знания JS Core",
          "Знание и применение базовых принципов ООP, Solid, DRY/KISS/YAGNI",
          "Уверенные знания HTTP",
          "Работа с системами контроля версий(Git)",
          "Знание Browsers: DOM, BOM, Events",
          "Опыт решения задач Codewars (level 4-6)",
          "Уровень английского не ниже B1 (Intermediate)",
        ],
        "date": "10.02.2024",
        "responseTime": "2 days",
        "result": 'Reject',
        "feedback": []
      },
    ]
  },
  {
    "name": "Innowise",
    "date": "10.02.2024",
    "responses": [
      {
        "title": "Trainee JS (React) Developer",
        "requirements": [
          "Уверенные знания JS Core",
          "Знание и применение базовых принципов ООP, Solid, DRY/KISS/YAGNI",
          "Уверенные знания HTTP",
          "Работа с системами контроля версий(Git)",
          "Знание Browsers: DOM, BOM, Events",
          "Опыт решения задач Codewars (level 4-6)",
          "Уровень английского не ниже B1 (Intermediate)",
        ],
        "date": "10.02.2024",
        "responseTime": "2 days",
        "result": 'Reject',
        "feedback": []
      },
      {
        "title": "Trainee JS (React) Developer",
        "requirements": [
          "Уверенные знания JS Core",
          "Знание и применение базовых принципов ООP, Solid, DRY/KISS/YAGNI",
          "Уверенные знания HTTP",
          "Работа с системами контроля версий(Git)",
          "Знание Browsers: DOM, BOM, Events",
          "Опыт решения задач Codewars (level 4-6)",
          "Уровень английского не ниже B1 (Intermediate)",
        ],
        "date": "10.02.2024",
        "responseTime": "2 days",
        "result": 'Reject',
        "feedback": []
      },
      {
        "title": "Trainee JS (React) Developer",
        "requirements": [
          "Уверенные знания JS Core",
          "Знание и применение базовых принципов ООP, Solid, DRY/KISS/YAGNI",
          "Уверенные знания HTTP",
          "Работа с системами контроля версий(Git)",
          "Знание Browsers: DOM, BOM, Events",
          "Опыт решения задач Codewars (level 4-6)",
          "Уровень английского не ниже B1 (Intermediate)",
        ],
        "date": "10.02.2024",
        "responseTime": "2 days",
        "result": 'Reject',
        "feedback": []
      },
    ]
  }
];

function ResponseInfo({response, number}: {response: IResponse, number: number}) {
  return (
    <tr>
      <td>{ number }</td>
      <td>{ response.title }</td>
      <td>
        <Table striped hover>
          <tbody>
            {
              response.requirements.map((text) => <tr>{ text }</tr>)
            }
          </tbody>
        </Table>
      </td>
      <td>{ response.date }</td>
      <td>{ response.responseTime }</td>
      <td>{ response.result }</td>
      <td>
        {
          response.feedback.map((text) => <tr>{ text }</tr>)
        }
      </td>
    </tr>
  )
}

function TableLine({companyData, number}: {companyData: IVac, number: number}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <tr onClick={() => setOpen(!open)}>
        <td>{ number }</td>
        <td>{ companyData.name }</td>
        <td>{ companyData.responses.length }</td>
        <td>{ companyData.date }</td>
      </tr>
      <tr>
        <Collapse in={open}>
          <td colSpan={4}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Должность</th>
                  <th>Требования</th>
                  <th>Дата отклика</th>
                  <th>Время ответа</th>
                  <th>Результат</th>
                  <th>Фидбэк</th>
                </tr>
              </thead>
              <tbody>
                {
                  companyData.responses.map((response, i) => <ResponseInfo response={ response } number={ i + 1 } />)
                }
              </tbody>
            </Table>
          </td>
        </Collapse>
      </tr>
    </>
  )
}

export default function JobSearchTable() {
    return (
    <Table striped bordered hover variant='dark'>
      <thead>
        <tr>
          <th>#</th>
          <th>Название организации</th>
          <th>Количество откликов</th>
          <th>Дата последнего отклика</th>
        </tr>
      </thead>
      <tbody>
        {
          VAC.map((data, i) => <TableLine companyData={ data } number={ i + 1 } />)
        }
      </tbody>
    </Table>
  )
}
