<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RegistrationOrders extends Model
{
    use HasFactory;

    protected $table = 'registration_orders';
    
    protected $fillable = [
        'event_id',
        'account_id',
    ];
}
