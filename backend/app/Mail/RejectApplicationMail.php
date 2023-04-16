<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class RejectApplicationMail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * @return Content
     */
    public function content(): Content
    {
        return new Content(
            view: 'admin.mail.reject_application_mail',
        );
    }
}
