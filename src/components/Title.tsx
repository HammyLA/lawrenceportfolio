import '../styles/title.css'

function Title() {
    return (
        <div>
            <div className="title">
                <div></div>
                <h1>
                    Hi! I'm Lawrence Cuenco
                </h1>
                <h3>
                    I'm currently learning full stack development and I'm always looking for new opportunities to learn and grow.
                </h3>
                <div className='buttonrow'>
                    <button className="grow" onClick={() => {
                        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                    }}>Projects</button>
                    <button className='grow' onClick={() => { window.location.href = '/lawrenceportfolio/src/assets/lawrencecuencoresume.pdf' }}>Resume</button>
                </div>
            </div>
            <div>
                <div className='skillrow'>
                    <div className='skills-container'>
                        <h3>
                            Frameworks / Libraries
                        </h3>
                        <div className='icons'>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" />
                        </div>
                    </div>
                    <div>
                        <h3>
                            Languages
                        </h3>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />

                    </div>
                    <div>
                        <h3>
                            Databases
                        </h3>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" />
                    </div>
                    <div>
                        <h3>
                            Technologies
                        </h3>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain.svg" />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Title
