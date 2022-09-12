import React, { useState } from 'react'
import Teammember from './teammember'
// import { useLogin } from '../../hooks/useLogin'

// styles

export default function Report() {
  const [users, setUsers] = useState([])

  // form field values
  const [projectName, setProjectName] = useState('')
  const [introduction, setIntroduction] = useState('')
  const [course, setCourse] = useState('')
  const [ccode, setCcode] = useState('')
  const [teamName, setTeamName] = useState('')
  const [objectives, setObjectives] = useState('')
  const [customers, setCustomers] = useState('')
  const [features, setFeatures] = useState('')
  const [work, setWork] = useState('')
  const [models, setModels] = useState('')
  const [timelines, setTimelines] = useState('')
  const [deliverable, setDeliverable] = useState('')
  const [challenge, setChallenge] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(projectName, objectives)
  }

  return (
    <div className="container">
      <h1 className="">Report Generator</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <h3>Project Name:</h3>
          <input
            required
            type="text"
            onChange={(e) => setProjectName(e.target.value)}
            value={projectName}
          />
        </label>
        <label>
          <h3>Course Name:</h3>
          <input
            required
            type="text"
            onChange={(e) => setCourse(e.target.value)}
            value={course}
          />
        </label>
        <label>
          <h3>Course Code:</h3>
          <input
            required
            type="text"
            onChange={(e) => setCcode(e.target.value)}
            value={ccode}
          />
        </label>

        <label>
          <h3>Team Name:</h3>
          <input
            required
            type="text"
            onChange={(e) => setTeamName(e.target.value)}
            value={teamName}
          />
        </label>


        <label>
          <h3>Supervisor :</h3>
          <input
            required
            type="text"
            placeholder="Enter name "
          />
          <input
            required
            type="text"
            placeholder="Enter degisgnation"
          />
          <input
            required
            type="text"
            placeholder="Enter Institute and University"
          />
          <input
            required
            type="email"
            placeholder="Enter email"
          />

        </label>


        <label>
          <h3>Team Members:</h3>
          <Teammember />

        </label>
        <label>
          <h3>Introduction</h3>
          <textarea
            required
            onChange={(e) => setIntroduction(e.target.value)}
            value={introduction}
          ></textarea>
        </label>
        <label>
          <h3>Objectives</h3>
          <textarea
            required
            onChange={(e) => setObjectives(e.target.value)}
            value={objectives}
          ></textarea>
        </label>

        <label>
          <h3>Target Customers</h3>
          <textarea
            required
            onChange={(e) => setCustomers(e.target.value)}
            value={customers}
          ></textarea>
        </label>
        <label>
          <h3>Application Features & Description</h3>
          <textarea
            required
            onChange={(e) => setFeatures(e.target.value)}
            value={features}
          ></textarea>
        </label>
        <label>
          <h3>Models,Tools and Resources</h3>
          <textarea
            required
            onChange={(e) => setModels(e.target.value)}
            value={models}
          ></textarea>
        </label>
        <label>
          <h3>Work Distribution</h3>
          <textarea
            required
            onChange={(e) => setWork(e.target.value)}
            value={work}
          ></textarea>
        </label>
        <label>
          <h3>Proposed Timeline</h3>
          <textarea
            required
            onChange={(e) => setTimelines(e.target.value)}
            value={timelines}
          ></textarea>
        </label>

        <label>
          <h3>Deliverables</h3>
          <textarea
            required
            onChange={(e) => setDeliverable(e.target.value)}
            value={deliverable}
          ></textarea>
        </label>

        <label>
          <h3>Challenge</h3>
          <textarea
            required
            onChange={(e) => setChallenge(e.target.value)}
            value={challenge}
          ></textarea>
        </label>

        <button className="btn">Generate PDF</button>
      </form>
    </div>
  )
}