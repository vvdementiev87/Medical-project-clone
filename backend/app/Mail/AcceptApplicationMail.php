<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Mail;

class AcceptApplicationMail extends Mailable
{
    use Queueable, SerializesModels;

    public function __construct(
        protected string $password,
    ) {}

    /**
     * @return Content
     */
    public function content(): Content
    {
        return new Content(
            view: 'admin.mail.accept_application_mail',
            with: [
              'password' => $this->password,
            ],
        );
    }
}
