<template>
    <div class="col-lg-6 col-md-10 col-sm-12 pt-5">
        <h2 class="text-success">Contact Us</h2>
        <form @submit.prevent="submitForm">
            <div class="mb-3">
                <label for="contact_fname" class="form-label">First Name</label>
                <input v-model="form.firstName" type="text" class="form-control" id="contact_fname" aria-describedby="firstNameError" required>
                <span id="firstNameError" v-if="errors.firstName" class="text-danger">{{ errors.firstName }}</span>
            </div>
            <div class="mb-3">
                <label for="contact_lname" class="form-label">Last Name</label>
                <input v-model="form.lastName" type="text" class="form-control" id="contact_lname" aria-describedby="lastNameError" required>
                <span id="lastNameError" v-if="errors.lastName" class="text-danger">{{ errors.lastName }}</span>
            </div>
            <div class="mb-3">
                <label for="contact_email" class="form-label">Email address</label>
                <input v-model="form.email" type="email" class="form-control" id="contact_email" aria-describedby="emailError" required>
                <span id="emailError" v-if="errors.email" class="text-danger">{{ errors.email }}</span>
            </div>
            <div class="mb-3">
                <label for="contact_msg" class="form-label">Your Message</label>
                <textarea v-model="form.message" class="form-control" id="contact_msg" rows="3" required></textarea>
                <span v-if="errors.message" class="text-danger">{{ errors.message }}</span>
            </div>
            <div class="mb-3 form-check">
                <input v-model="form.agree" type="checkbox" class="form-check-input" id="contact_check" required>
                <label class="form-check-label" for="contact_check">I agree with the terms and conditions</label>
                <span v-if="errors.agree" class="text-danger d-block">{{ errors.agree }}</span>
            </div>
            <button type="submit" class="btn btn-success" :disabled="button_disabled">{{ button_txt }}</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'ContactForm',
    data() {
        return {
            form: {
                firstName: '',
                lastName: '',
                email: '',
                message: '',
                agree: false,
            },
            errors: {},
            button_disabled: false,
            button_txt: 'Submit'
        }
    },
    methods: {
        validateForm() {
            this.errors = {};
            if (!this.form.firstName) {
                this.errors.firstName = 'First Name is required';
            } else if (this.form.firstName.length < 3) {
                this.errors.firstName = 'First Name must be at least 3 characters long';
            }
            if (!this.form.lastName) {
                this.errors.lastName = 'Last Name is required';
            } else if (this.form.lastName.length < 3) {
                this.errors.lastName = 'Last Name must be at least 3 characters long';
            }
            if (!this.form.email) {
                this.errors.email = 'Email is required';
            } else if (this.form.email.length < 6) {
                this.errors.email = 'Email must be at least 6 characters long';
            }
            if (!this.form.message) {
                this.errors.message = 'Message is required';
            } else if (this.form.message.length < 10) {
                this.errors.message = 'Message must be at least 10 characters long';
            }
            if (!this.form.agree) {
                this.errors.agree = 'You must agree to the terms';
            }
            return Object.keys(this.errors).length === 0;
        },
        submitForm() {
            if (this.validateForm()) {
                this.button_disabled = true;
                this.button_txt = 'Sending...';
                
                setTimeout(() => {
                    this.resetForm();
                    this.$emit('formSubmitted', this.form);
                }, 2000);
            }
        },
        resetForm() {
            this.form.firstName = '';
            this.form.lastName = '';
            this.form.email = '';
            this.form.message = '';
            this.form.agree = false;
            this.errors = {};
            this.button_disabled = false;
            this.button_txt = 'Submit';
        }
    }
}
</script>

<style scoped>
.text-danger {
    font-size: 0.875rem;
}
</style>
