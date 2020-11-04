<template>
  <q-page class="q-pa-md">
   <div class="row rowTitle">
    <div class="col-12">
     <h3>Contacto</h3>
    </div>
   </div>
   <div class="row rowInputs">
    <div class="col-5 col-sm-12 col-md-5 col-lg-5">
     <q-input outlined v-model="email" label="Email" hint="Introduzca su email" placeholder="email@email.com"/>
    </div>
    <div class="col-0 col-sm-0 col-md-2 col-lg-2"></div>
    <div class="col-5 col-sm-12 col-md-5 col-lg-5">
     <q-input outlined v-model="nombre" label="Nombre" hint="Introduzca su nombre" placeholder="Xxxx Yyyyy Zzzz"/>
    </div>
   </div>
   <div class="row rowInputs">
    <div class="col-5 col-sm-12 col-md-5 col-lg-5">
     <q-input outlined v-model="telefono" label="Teléfono" hint="Introduzca su teléfono" placeholder="034 123456789"/>
    </div>
    <div class="col-0 col-sm-0 col-md-2 col-lg-2"></div>
    <div class="col-5 col-sm-12 col-md-5 col-lg-5">
     <q-select outlined v-model="razon" :options="razones" label="Razón" hint="Seleccione una razón"/>
    </div>
   </div>
   <div class="row rowInputs">
    <div class="col-12 col-sm-12 col-md-12 col-lg-12">
     <q-input outlined v-model="mensaje" label="Mensaje" hint="Introduzca su mensaje" autogrow/>
    </div>
   </div>
   <div class="row rowInputs">
    <div class="col-12 col-sm-12 col-md-12 col-lg-12">
     <q-btn color="negative" label="Cancelar" @click="aviso"/>
     <q-btn color="positive" label="Enviar" />
    </div>
   </div>
  </q-page>
</template>

<script>
export default {
  name: 'contacto',
  data () {
    return {
      email: null,
      nombre: null,
      telefono: null,
      razon: null,
      razones: [
        'Soy pc master race', 'Soy pikmin', 'Soy sonyer', 'soy xboxer'
      ]
    }
  },
  methods: {
    aviso () {
      var numero1 = 1
      var numero2 = 2
      if (numero1 < numero2) {
        alert('hola')
      }
    }
  }
}
</script>
