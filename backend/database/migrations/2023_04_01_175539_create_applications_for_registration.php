<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('application_for_registration', static function (Blueprint $table) {
            $table->id();
            $table->string('last_name');
            $table->string('first_name');
            $table->string('surname')->nullable();
            $table->date('birth_date');
            $table->string('email')->unique();
            $table->string('phone');
            $table->string('address');
            $table->string('education');
            $table->string('education_end');
            $table->string('specialization');
            $table->string('experience');
            $table->string('company');
            $table->string('position');
            $table->string('degree')->nullable();
            $table->string('academic_rank')->nullable();
            $table->string('interests');
            $table->boolean('is_member');
            $table->string('other_organization')->nullable();
            $table->boolean('sign_for_news')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('of_application_for_registration');
    }
};
