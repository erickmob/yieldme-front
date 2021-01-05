<template>
 <v-app id="inspire">
    <v-main style="background: #151a30;">
      <div >
          <v-container>
            <v-row>
                <v-col cols="12" sm="2" />

                <v-col
                    cols="12"
                    sm="8"
                >
                    <v-sheet
                    min-height="70vh"
                    rounded="lg"
                    style="background: #222b45;"
                    >
                        <div class="d-flex flex-column justify-space-between align-center pt-5">
                            <v-img
                            lazy-src="https://assets.stickpng.com/images/580b57fbd9996e24bc43bbae.png"
                            max-height="150"
                            max-width="250"
                            src="https://assets.stickpng.com/images/580b57fbd9996e24bc43bbae.png"
                            ></v-img>
                        </div>
                        <div class="d-flex flex-column justify-space-between align-center pt-10">
                            <form class="login d-flex flex-column justify-space-between align-center" @submit.prevent="login">
                                <h1>Sign in</h1>

                                <v-text-field 
                                    label="Email" 
                                    v-model="username" 
                                    :rules="rules"
                                    hide-details="auto" >
                                </v-text-field>
                                <!-- <label>Email</label>
                                <input required v-model="email" type="text" placeholder="Email"/> -->
                                <!-- <label>Password</label>
                                <input required v-model="password" type="password" placeholder="Password"/> -->

                                <v-text-field 
                                    label="Password" 
                                    v-model="password" 
                                    type="password"
                                    :rules="rules"
                                    hide-details="auto" >
                                </v-text-field>
                                
                                <!-- <button type="submit">Login</button> -->
                                <v-btn
                                    color="info"
                                    class="mr-4 mt-5"
                                    @click="login"
                                    >
                                    Login
                                </v-btn>
                            </form>
                        </div>
                    </v-sheet>
                </v-col>
                <v-col cols="12" sm="2"/>
            </v-row>
            <v-snackbar
                v-model="snackbar"
                >
                Usuário e/ou senha inválidos!

                <template v-slot:action="{ attrs }">
                    <v-btn
                    color="pink"
                    text
                    v-bind="attrs"
                    @click="snackbar = false"
                    >
                    Close
                    </v-btn>
                </template>
                </v-snackbar>
        </v-container>
      </div>
    </v-main>
  </v-app>
</template>
<script>
   export default {
      data(){
         return {
            snackbar: false,
            rules: [
                value => !!value || 'Required.',
                value => (value && value.length >= 3) || 'Min 3 characters',
            ],
            username : "",
            password : ""
            }
      },
      methods: {
          login: function () {
               let username = this.username 
               let password = this.password
               this.$store.dispatch('login', { username, password })
               .then(() => this.$router.push('/'))
               .catch(err => console.log(err), this.snackbar=true )
            }
      }
   }
</script>