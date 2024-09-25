<template>
<div class="container pt-5">
    <div class="row">
        <div class="h2 text-center text-success">Delivery Details</div>
    </div>
    <form @submit.prevent="formSubmit">
        <div class="row">
            <!-- First name field -->
            <div class="col-md-6 mb-3">
                <label for="fnameForm" class="form-label">First Name</label>
                <input type="text" class="form-control" id="fnameForm" v-model="form.firstName" required>
                <span class="text-danger" v-if="form_errors.firstName">{{ form_errors.firstName }}</span>
            </div>
            <!-- Last name field -->
            <div class="col-md-6 mb-3">
                <label for="lnameForm" class="form-label">Last Name</label>
                <input type="text" class="form-control" id="lnameForm" v-model="form.lastName" required>
                <span class="text-danger" v-if="form_errors.lastName">{{ form_errors.lastName }}</span>
            </div>
            <!-- Email field -->
            <div class="col-md-6 mb-3">
                <label for="emailForm" class="form-label">Email address</label>
                <input type="email" class="form-control" id="emailForm" aria-describedby="emailHelp" v-model="form.email" required>
                <span class="text-danger" v-if="form_errors.email">{{ form_errors.email }}</span>
            </div>
            <!-- Phone field -->
            <div class="col-md-6 mb-3">
                <label for="phoneForm" class="form-label">Phone</label>
                <input type="tel" class="form-control" id="phoneForm"  pattern="[0-9]{10,15}" placeholder="e.g. 1234567890" v-model="form.phone" required>
                <span class="text-danger" v-if="form_errors.phone">{{ form_errors.phone }}</span>
            </div>
            <!-- Country -->
            <div class="col-md-6 mb-3">
                <label for="countryForm" class="form-label">Country</label>
                <input type="text" class="form-control" id="countryForm" v-model="form.country" required>
                <span class="text-danger" v-if="form_errors.country">{{ form_errors.country }}</span>
            </div>
            <!-- Address -->
            <div class="col-md-6 mb-3">
                <label for="addressForm" class="form-label">Address</label>
                <input type="text" class="form-control" id="addressForm" v-model="form.address" required>
                <span class="text-danger" v-if="form_errors.address">{{ form_errors.address }}</span>
            </div>
        </div>
        <div class="row">
            <!-- Checkbox -->
            <div class="col-12 mb-3">
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="checkForm" v-model="form.agree" required>
                    <label class="form-check-label" for="checkForm">I agree with the terms and conditions</label>
                    <span class="text-danger d-block" v-if="form_errors.agree">{{ form_errors.agree }}</span>
                </div>
            </div>
        </div>
        <!-- Submit button -->
        <button type="submit" class="btn btn-outline-danger">Payment: {{ total }}$</button>
    </form>
    <div class="container pt-5" v-if="showAlert">
        <div class="row">
            <div class="col-12">
                <AlertMessage alert_type="success" :title="`Dear ${alertData.firstName} ${alertData.lastName}`" message="Your order has been received. Here are the details:">
                    <ul>
                        <li><strong>Address:</strong> {{ alertData.address }}, {{ alertData.country }}</li>
                        <li><strong>Phone:</strong> {{ alertData.phone }}</li>
                        <li><strong>Email:</strong> {{ alertData.email }}</li>
                        <li><strong>Items:</strong>
                            <ul>
                                <li v-for="(item, index) in cart" :key="index">
                                    {{ item.title }} - {{ item.count }} x {{ item.price }}$
                                </li>
                            </ul>
                        </li>
                        <p><strong>Total:</strong> {{ total }}$</p>
                        <hr>
                        <p class="mb-0">Thank you for your purchase!</p>
                    </ul>
                </AlertMessage>
            </div>
        </div>
    </div>
    
</div>
</template>

<script>
import AlertMessage from '../AlertMessage.vue';
export default {
    name:'CheckoutForm',
    components: {
        AlertMessage
    },
    props:['total','cart'],
    data() {
        return {
            showAlert:false,
            form: {
                firstName:'',
                lastName:'',
                email:'',
                phone:'',
                country:'',
                address:'',
                agree:false,
            },
            alertData:{},
            form_errors:{}
        }
    },
    methods: {
        formValidation() {
            this.form_errors={}
            this.alertData = {};
            
            if (!this.form.firstName) {
                this.form_errors.firstName = 'First Name is required';
            } else if (this.form.firstName.length < 3) {
                this.form_errors.firstName = 'First Name must be at least 3 characters long';
            }

            if (!this.form.lastName) {
                this.form_errors.lastName = 'Last Name is required';
            } else if (this.form.lastName.length < 3) {
                this.form_errors.lastName = 'Last Name must be at least 3 characters long';
            }

            if (!this.form.email) {
                this.form_errors.email = 'Email is required';
            } else if (this.form.email.length < 6) {
                this.form_errors.email = 'Email must be at least 6 characters long';
            }

            const phonePattern = /^[0-9]{10,15}$/;
            if (!this.form.phone) {
                this.form_errors.phone = 'Phone is required';
            } else if (!phonePattern.test(this.form.phone)) {
                this.form_errors.phone = 'Phone must be between 10 and 15 digits';
            }

            if (!this.form.country) {
                this.form_errors.country = 'Country is required';
            } else if (this.form.country.length < 3) {
                this.form_errors.country = 'Country name must be at least 3 characters long';
            }

            if (!this.form.address) {
                this.form_errors.address = 'Address is required';
            } else if (this.form.address.length < 9) {
                this.form_errors.address = 'Address name must be at least 9 characters long';
            }

            if (!this.form.agree) {
                this.form_errors.agree = 'You must agree to the terms';
            }
            return Object.keys(this.form_errors).length===0
        },
        formSubmit() {
            if (this.formValidation()) {
                this.alertData = {...this.form}
                this.showAlert = true
                this.resetForm();
                this.resetCart();
            }
        },
        resetForm() {
            this.form.firstName = '';
            this.form.lastName = '';
            this.form.email = '';
            this.form.address = '';
            this.form.phone = '';
            this.form.country = '';
            this.form.agree = false;
            this.form_errors = {};
        },
        resetCart() {
            localStorage.removeItem('cart');
            localStorage.removeItem('cart_total');
        }
    }
}
</script>