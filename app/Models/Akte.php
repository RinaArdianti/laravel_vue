<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Akte extends Model
{
   // use HasFactory;
   protected $table = "aktes";
   protected $primaryKey = "id";
   protected $fillable =['id', 'namaAkte', 'ttl', 'status'];
}
