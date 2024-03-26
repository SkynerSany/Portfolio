import { useState } from "react";
import { Button, Collapse, Table } from "react-bootstrap";
import ModalWindow from "../../components/modal/modal";
import { ICompany, IResponse } from "./job-search-table.interfaces";
import './job-search-table.scss';

const VAC: ICompany[] = [
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
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
      <td><Button variant="outline-secondary" onClick={() => handleShow()}>edit</Button></td>
      <ModalWindow type="responces" show={show} handleClose={handleClose} data={VAC[0]} />
    </tr>
  )
}

function TableLine({companyData, number}: {companyData: ICompany, number: number}) {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e?.stopPropagation();
    setShow(false)
  };
  const handleShow = (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e?.stopPropagation();
    setShow(true)
  };

  return (
    <>
      <tr onClick={() => setOpen(!open)}>
        <td>{ number }</td>
        <td>{ companyData.name }</td>
        <td>{ companyData.responses.length }</td>
        <td>{ companyData.date }</td>
        <td><Button variant="outline-secondary" onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => handleShow(e)}>edit</Button></td>
        <ModalWindow type="responces" show={show} handleClose={handleClose} data={companyData} />
      </tr>
      <tr>
        <Collapse in={open}>
          <td colSpan={5}>
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
                  <th>Изменить</th>
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
    <>
      <Table striped bordered hover variant='dark'>
        <thead>
          <tr>
            <th>#</th>
            <th>Название организации</th>
            <th>Количество откликов</th>
            <th>Дата последнего отклика</th>
            <th>Изменить</th>
          </tr>
        </thead>
        <tbody>
          {
            VAC.map((data, i) => <TableLine companyData={ data } number={ i + 1 } />)
          }
        </tbody>
      </Table>
    </>
  )
}
