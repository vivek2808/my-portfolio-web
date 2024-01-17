function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: 'smooth' });
}

function toggleSubSection(subSectionId) {
  const subSection = document.getElementById(subSectionId);
  subSection.style.display = subSection.style.display === 'none' ? 'block' : 'none';
}
function toggleSubSection(subSectionId) {
  const subSection = document.getElementById(subSectionId);
  subSection.classList.toggle('show');
}

function scrollToSubSection(subSectionId) {
  const subSection = document.getElementById(subSectionId);
  subSection.style.display = 'flex'; // Display the sub-section as flex
  const yOffset = -60; // Adjust the offset as needed
  const y = subSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
  window.scrollTo({ top: y, behavior: 'smooth' });
}

function toggleSubSection(subSectionId) {
  const subSection = document.getElementById(subSectionId);
  subSection.style.display = subSection.style.display === 'none' ? 'flex' : 'none';
}
function scrollToNextSection() {
  const currentSection = document.querySelector('.section:target');
  const nextSection = currentSection.nextElementSibling;

  if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
  }
}

function scrollToNextSection(nextSectionId) {
  const currentSection = document.querySelector('.section:target');
  const nextSection = document.querySelector(nextSectionId);

  if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const educationButton = document.getElementById('education-button');
  const experienceButton = document.getElementById('experience-button');
  const educationSubSection = document.getElementById('education');
  const experienceSubSection = document.getElementById('experience');

  educationButton.addEventListener('click', function () {
      toggleVisibility(educationSubSection);
  });

  experienceButton.addEventListener('click', function () {
      toggleVisibility(experienceSubSection);
  });

  function toggleVisibility(element) {
      element.style.display = (element.style.display === 'none' || element.style.display === '') ? 'flex' : 'none';
  }
});
