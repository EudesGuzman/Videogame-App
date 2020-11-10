<template>
  <q-page class="q-pa-md">

    <q-breadcrumbs>
      <q-breadcrumbs-el icon="home" to="/" />
      <q-breadcrumbs-el label="Contacto" icon="contact_support" />
    </q-breadcrumbs>

    <div class="row rowTitle">
        <div class="col-12">
          <h3>Contacto</h3>
        </div>
    </div>
    <div class="row rowInputs">
      <div class="col-12 col-sm-12 col-md-5 col-lg-5">
        <q-input outlined v-model="username" hint="Introduzca su nombre de usuario" />
      </div>
      <div class="col-0 col-sm-0 col-md-2 col-lg-2"></div>
      <div class="col-12 col-sm-12 col-md-5 col-lg-5">
        <q-input outlined v-model="fullname" hint="Introduzca su nombre completo" />
      </div>
    </div>
    <div class="row rowInputs">
      <div class="col-12 col-sm-12 col-md-5 col-lg-5">
        <q-input outlined v-model="email" hint="Introduzca su email" />
      </div>
      <div class="col-0 col-sm-0 col-md-2 col-lg-2"></div>
      <div class="col-12 col-sm-12 col-md-5 col-lg-5">
        <q-input outlined v-model="pass" hint="Introduzca su contraseña" />
      </div>
    </div>
    <div class="row rowInputs">
      <div class="col-12 col-sm-12 col-md-5 col-lg-5">
        <q-input outlined v-model="phone" hint="Introduzca su telefono" />
      </div>
      <div class="col-0 col-sm-0 col-md-2 col-lg-2"></div>
      <div class="col-12 col-sm-12 col-md-5 col-lg-5">
        <q-select outlined v-model="razon" :options="options" hint="Selecciona una razón" />
      </div>
    </div>

    <div class="row rowInputs">
      <div class="col-12 col-sm-12 col-md-12 col-lg-12">
        <q-input class="mensajeTextArea" v-model="text" hint="Introduzca el mensaje" filled autogrow/>
      </div>
    </div>

    <div class="row rowButtons">
      <div class="col-12 col-sm-12 col-md-12 col-lg-12">
        <q-btn color="negative" @click="aviso" label="Cancelar" />
        <q-btn color="positive" @click="enviar" label="Enviar" />
      </div>
    </div>

  </q-page>
</template>

<script>
export default {
  name: 'contact',
  data () {
    return {
      username: '',
      fullname: '',
      email: '',
      pass: '',
      phone: '',
      razon: 'Mal producto',
      options: ['Mal producto', 'Mal vendedor', 'He comprado otro']
    }
  },
  methods: {
    aviso () {
      this.$q.notify({
        message: 'Cancelado.',
        color: 'red',
        position: 'top-right',
        icon: 'announcement'
      })
    },
    enviar () {
      this.$q.notify({
        message: 'Correo enviado.',
        color: 'green',
        position: 'top-right',
        icon: 'announcement'
      })
    }
  }
}
</script>
