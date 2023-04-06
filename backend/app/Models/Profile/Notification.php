<?php

namespace App\Models\Profile;

use App\Models\Articles;
use App\Models\Videos;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Notification extends Model
{
    use HasFactory;

    protected $table = 'notifications';

    protected $fillable = [
        'user_id',
        'message',
        'status',
    ];

    public static function getAll()
    {
        $id = auth()->id();
        $result = \DB::table('notifications')->where('user_id', $id
        )->orderBy('created_at', 'desc')->get();
        return $result;
    }
    public static function setAllAsRead()
    {
        $id = auth()->id();
        \DB::table('notifications')->where('user_id', $id)->where('status','=','sent')
        ->update(['status'=>'read']);
        $result = \DB::table('notifications')->where('user_id', $id
        )->orderBy('created_at', 'desc')->get();

        return $result;
    }
}
