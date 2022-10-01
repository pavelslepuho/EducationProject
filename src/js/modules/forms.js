class Form {
    constructor(formSelector, url) {
        this.form = document.querySelector(formSelector);
        this.url = url;
        this.num = 0;
        this.message = {
            loading: "Loading...",
            success: "Done! We will respond you as soon as possible!",
            failure: "Ops... Something went wrong...",
            empty: "Please, fill in empty fields"
        };
    }

    addMessage(m) {
        if (m === this.message.loading || m === this.message.empty) {
            try {
                document.querySelector('#message').remove();
            } catch (e) { }
            this.div = document.createElement('div');
            this.div.setAttribute("id", "message");
            this.div.style.cssText = `
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                height: 80px;
                width: 500px;
                background-color: black;
                color: white;
                border: white solid 1px;
                font-size: 18px;
                font-weight: 900;
                display: flex;
                align-items: center;
                justify-content: center;
                text-align: center;
                border-radius: 5px;
                font-family: 'Mark';
            `;
            this.div.textContent = m;
            this.form.append(this.div);
            document.body.addEventListener('click', () => this.div.remove());
        } else if (!m) {
            try {
                document.querySelector('#message').remove();
            } catch (e) { }
        } else {
            this.div.textContent = m;
        }
    }

    init() {

        this.form.querySelectorAll('input').forEach(input => {
            input.addEventListener('input', () => {
                if (input.value) {
                    input.style.background = 'rgba(216, 216, 216, .3)';
                }
            });
        });

        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.emptyInputValueCount = 0;

            this.form.querySelectorAll('input').forEach(input => {
                if (!input.value) {
                    input.style.backgroundColor = 'red';
                    this.emptyInputValueCount++;
                }
            });

            if (this.emptyInputValueCount === 0) {
                this.addMessage(this.message.loading);
                this.formData = new FormData(this.form);
                this.jsonData = JSON.stringify(Object.fromEntries(this.formData));
                this.form.reset();
                fetch(this.url, {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json;charset=utf-8"
                    },
                    body: this.jsonData
                })
                    .then(() => this.addMessage(this.message.success))
                    .catch(() => this.addMessage(this.message.failure))
                    .finally(() => {
                        setTimeout(() => this.addMessage(), 4000);
                    });
            } else {
                this.addMessage(this.message.empty);
            }
        });

    }
}

export default Form;