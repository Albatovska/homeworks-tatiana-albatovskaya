class VideoPlayerBasic {
    constructor(settings) {
        // "сольем" наши дефолтные сетинги с теми, что пришли
        this.settings = Object.assign(VideoPlayerBasic.getDefaultSettings(), settings)
    }

    init() {
        // сделаем проверку на то, что пришли в настройках непустые строки
        if (!this.settings.videoUrl) return console.error('NOT videoUrl')
        if (!this.settings.videoPlayerContainer) return console.error('NOT videoPlayerContainer')

        // создадим разметку на странице
        this.addTemplate()
            // найдем эл-ты для управления видосиком
        this.setElements()
            // обработчики
        this.setEvents()
    }

    addTemplate() {
        const template = this.createTemplate()
        const container = document.querySelector(this.settings.videoPlayerContainer)

        container ? container.insertAdjacentHTML('afterbegin', template) : console.error('NOT videoPlayerContainer')
    }

    setElements() {
        this.container = document.querySelector(this.settings.videoPlayerContainer);
        this.video = this.container.querySelector('video');
        this.toggleBtn = this.container.querySelector('.toggle');
        this.progress = this.container.querySelector('.progress__filled');
        this.progressContainer = this.container.querySelector('.progress');

        this.playerSlider = this.container.querySelector('.player__slider');
        this.playerSliderSpeed = this.container.querySelector('.player__slider__speed');
        this.playerSkip = this.container.querySelectorAll('.player__button');

    }

    setEvents() {
        this.video.addEventListener('click', this.toggleVideo);
        this.toggleBtn.addEventListener('click', this.toggleVideo);
        this.progressContainer.addEventListener('click', (e) => this.scrub(e));
        this.progressContainer.addEventListener('mousedown', () => this.isMouseDown = true);
        this.progressContainer.addEventListener('mouseup', () => this.isMouseDown = false);
        this.progressContainer.addEventListener('mousemove', (e) => {
            this.isMouseDown && this.scrub(e)
        });
        this.video.addEventListener('timeupdate', this.handleProgress);

        // this.playerSlider.addEventListener('click', (e) => this.setValume);
        // this.playerSlider.addEventListener('mousedown', () => this.isMouseDown = true);
        // this.playerSlider.addEventListener('mouseup', () => this.isMouseDown = false);
        // this.playerSlider.addEventListener('mousemove', (e) => {
        //     this.isMouseDown && this.setValume(event)
        // });

        // this.playerSliderSpeed.addEventListener('click', (e) => this.setSpeed);
        // this.playerSliderSpeed.addEventListener('mousedown', () => this.isMouseDown = true);
        // this.playerSliderSpeed.addEventListener('mouseup', () => this.isMouseDown = false);
        // this.playerSliderSpeed.addEventListener('mousemove', (e) => {
        //     this.playerSliderSpeed && this.setSpeed(event)
        // });

        this.playerSlider.addEventListener('change', this.setValume);
        this.playerSliderSpeed.addEventListener('click', this.setSpeed);
        // this.playerSkip.addEventListener('click', (e) => this.setSkip(e));
        this.playerSkip.forEach(element => {
            element.addEventListener('click', () => {
                this.skip(element.getAttribute('data-skip'))
            })
        });
        this.video.addEventListener('dblclick', (e) => this.setSpeed(e))
    }

    setSkip = (e) => {
        if (this.playerSkip.dataset.skip = '1') {
            this.video.currentTime = +e.value
        } else if (this.playerSkip.dataset.skip = '-1') {
            this.video.currentTime = -e.value
        }
    }
    setValume = (event) => {
        this.video.volume = event.target.value * 0.1
    }
    setSpeed = (event) => {
        if (event.clientX > 600) {
            this.video.currentTime += 2;
        } else {
            this.video.currentTime -= 2;
        }

    }

    toggleVideo = () => {
        const method = this.video.paused ? 'play' : 'pause';
        this.toggleBtn.textContent = this.video.paused ? ' || ' : ' ► ';
        this.video[method]()
    }

    scrub(e) {
        this.video.currentTime = (e.offsetX / this.progressContainer.offsetWidth) * this.video.duration
    }

    handleProgress = () => {
        const {
            currentTime,
            duration
        } = this.video
        const percent = (currentTime / duration) * 100
        this.progress.style.flexBasis = `${percent}%`
    }

    createTemplate() {
        const {
            videoUrl,
            volume
        } = this.settings;

        return `
        <div class="player">
            <video class="player__video viewer" src="${videoUrl}"> </video>
            <div class="player__controls">
                <div class="progress">
                    <div class="progress__filled"></div>
            </div>
            <button class="player__button toggle" title="Toggle Play">►</button>
            <input type="range" name="volume" class="player__slider" min=0 max="1" step="0.05" value="${volume}">
            <input type="range" name="playbackRate" class="player__slider" min="0.5" max="2" step="0.1" value="1">
            <button data-skip="-1" class="player__button">« 1s</button>
            <button data-skip="1" class="player__button">1s »</button>
            </div>
        </div>
        `
    }

    static getDefaultSettings() {
        return {
            videoUrl: '',
            videoPlayerContainer: '',
            volume: 1,
            playbackRate: 1
        }
    }
}

const myPlayer = new VideoPlayerBasic({
    videoUrl: 'video/mov_bbb.mp4',
    videoPlayerContainer: 'body',
});

myPlayer.init();