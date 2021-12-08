<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ktp extends Model
{
    //use HasFactory;
    protected $table = "ktps";
    protected $primaryKey = "id";
    protected $fillable =['id', 'aktes_id', 'nik', 'nama'];
}
