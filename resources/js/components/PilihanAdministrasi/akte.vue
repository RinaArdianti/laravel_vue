<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">AKTE</div>

                    <div class="card-body">
                        <div class= "form-grow">
                            <div class= "table-responsive">
                                <table class="table">
                                    <tr>
                                        <th>Nama Penduduk</th>
                                        <th>TTL</th>
                                        <th>Status</th>
                                        <th>Aksi</th>
                                        
                                    </tr>
                                    <tr v-for="item in aktes" :key="item.id">
                                        <td> {{item.namaAkte}}   </td>
                                        <td>{{item.ttl}}</td>
                                        <td>{{item.status}}</td>
                                        <td>  Edit | Hapus</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default{
        data(){
            return{
                aktes :{}
            };
        },
        methods:{
            loadData(){
                axios.get('api/ambilakte').then(({data})=>(this.aktes= data));
                
            }
        },
        created(){
            this.loadData();
        }
    }
</script>
