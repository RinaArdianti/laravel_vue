<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">KTP</h3> 
                        <div class="card-tools">
                            <button type="button" class="btn btn-success" @click="showModal">Tambah Data</button>
                        </div>
                        </div>
                        

                    <div class="card-body">
                        <div class= "form-grow">
                            <div class= "table-responsive">
                                <table class="table">
                                    <tr>
                                        <th>Nama Penduduk</th>
                                        <th>NIK</th>
                                        
                                        <th>Aksi</th>
                                        
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                       
                                        <td>  Edit | Hapus</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Modal -->
            <div class="modal fade" id="modalmuncul" tabindex="-1" role="dialog" aria-labelledby="modalmuncul1" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Tambah Data</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <form action="">
                    <div class="modal-body">
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Nama Penduduk">
                    </div>
                   
                    <div class="form-group">
                        <input type="number" class="form-control" placeholder="NIK">
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-primary">Simpan</button>
                </div>
                </form>
                
                </div>
            </div>
            </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                aktes: {},
                form: new Form({
                id: "",
                aktes_id:"",
                nik:"",
                nama:"",

            })
            };
            
        },
        methods:{
            showModal(){
                $("#modalmuncul").modal("show");
            },
            loadData(){
                axios.get('api/ambilakte').then(({data})=>(this.aktes= data));  
            },
            simpanData(){

            }

        },
        created(){
            this.loadData();
        }
    }
</script>
