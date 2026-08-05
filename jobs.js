import { db, collection, getDocs } from "./firebase.js";

const jobsContainer = document.getElementById("jobsContainer");

async function loadJobs() {
  jobsContainer.innerHTML = "";

  try {
    const querySnapshot = await getDocs(collection(db, "jobs"));

    if (querySnapshot.empty) {
      jobsContainer.innerHTML = "<p>No jobs available.</p>";
      return;
    }

    querySnapshot.forEach((doc) => {
      const job = doc.data();

      jobsContainer.innerHTML += `
        <div class="job-card">
          <h2>${job.title}</h2>
          <p><strong>Organization:</strong> ${job.organization}</p>
          <p><strong>Location:</strong> ${job.location}</p>
          <p><strong>Qualification:</strong> ${job.qualification}</p>
          <p><strong>Salary:</strong> ${job.salary}</p>
          <p><strong>Vacancy:</strong> ${job.vacancy}</p>
          <p><strong>Last Date:</strong> ${job.lastDate}</p>
          <p>${job.description}</p>
          <a href="${job.applyLink}" target="_blank" class="btn">
            Apply Now
          </a>
        </div>
      `;
    });

  } catch (error) {
    jobsContainer.innerHTML =
      "<p>Failed to load jobs.</p>";
    console.error(error);
  }
}

loadJobs();
