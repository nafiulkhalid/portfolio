
document.addEventListener("DOMContentLoaded", () => {
    const startButton = document.querySelector(".start-button");
    const startText = document.querySelector(".start-text");
    const computerImage = document.querySelector(".windows-image");
    const fullscreenContainer = document.querySelector(".fullscreen-container");
    const windowsTitle = document.querySelector(".windows-title");
    let isStarted = false;

    startButton.addEventListener("click", () => {
        if (!isStarted) {
            // Start button clicked
            isStarted = true;
            startText.textContent = " ";
            setTimeout(() => {
                startText.textContent = "Off";
            }, 3500);

            // Zoom in effect for the computer image
            computerImage.style.transition = "transform 3s ease-in-out, opacity 3s ease-in-out";
            computerImage.style.transform = "scale(10)";
            computerImage.style.opacity = "0";

            // Transition to black and display the home screen
            setTimeout(() => {
                fullscreenContainer.style.backgroundColor = "black";
                computerImage.style.display = "none";

                // Create the home screen
                createHomeScreen();
            }, 3000);
        } else {

            // Shut Down button clicked
            isStarted = false;
            startText.textContent = " ";
            setTimeout(() => {
                startText.textContent = "Start"; // Change back to "Start"
            }, 500);

            // Reset the screen
            fullscreenContainer.innerHTML = ''; // Clear the home screen content
            fullscreenContainer.style.backgroundColor = "black";

            // Add the computer image back
            fullscreenContainer.appendChild(windowsTitle);
            fullscreenContainer.appendChild(computerImage);
            fullscreenContainer.appendChild(startButton);

            // Reset the computer image
            computerImage.style.display = "block";
            computerImage.style.opacity = "1";
            computerImage.style.transform = "scale(1)";
        }
    });

    // Create the home screen
    function createHomeScreen() {
        // Create the desktop container
        const desktopContainer = document.createElement("div");
        desktopContainer.classList.add("desktop-container");

        // Create "My Computer" icon
        const myComputerIcon = document.createElement("div");
        myComputerIcon.classList.add("icon");
        myComputerIcon.innerHTML = `
            <div class="icon-image my-computer"></div>
            <span>My Computer</span>
        `;

        // Create "Resume" icon
        const resumeIcon = document.createElement("div");
        resumeIcon.classList.add("icon");
        resumeIcon.innerHTML = `
            <div class="icon-image folder"></div>
            <span>Resume</span>
        `;

        // Click functionality to "Resume" icon
        resumeIcon.addEventListener("click", () => {
            const resumePopup = document.createElement("div");
            resumePopup.classList.add("resume-popup");
            resumePopup.innerHTML = `
                <div class="resume-header">
                    <span>Resume</span>
                    <button class="close-button">X</button>
                </div>
                <iframe src="Nafiul_Khalid_Resume.pdf" frameborder="0" class="resume-iframe"></iframe>
            `;
            desktopContainer.appendChild(resumePopup);

            // Close button functionality
            resumePopup.querySelector(".close-button").addEventListener("click", () => {
                resumePopup.remove();
            });
        });

        // Append icons to desktop container
        desktopContainer.appendChild(myComputerIcon);
        desktopContainer.appendChild(resumeIcon);

        // Create taskbar
        const taskbar = document.createElement("div");
        taskbar.classList.add("taskbar");

        // Append desktop container and taskbar to fullscreen container
        fullscreenContainer.appendChild(desktopContainer);
        fullscreenContainer.appendChild(taskbar);
    }
});


