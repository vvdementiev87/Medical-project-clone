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
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn(['place_work', 'category', 'other_info']);
            $table->string('surname')->nullable()->change();
            $table->string('address')->change();
            $table->string('education')->change();
            $table->string('phone')->change();
            $table->string('education_end');
            $table->string('specialization');
            $table->string('company');
            $table->string('degree')->nullable();
            $table->string('academic_rank')->nullable();
            $table->string('interests');
            $table->boolean('is_member');
            $table->string('other_organization')->nullable();
            $table->string('experience')->change();
            $table->date('birth_date')->change();
            $table->binary('avatar')->nullable()->change();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('place_work')->nullable();
            $table->string('category')->nullable();
            $table->string('other_info')->nullable();
            $table->string('surname')->change();
            $table->string('address')->nullable()->change();
            $table->string('education')->nullable()->change();
            $table->string('phone')->nullable()->change();
            $table->string('experience')->nullable()->change();
            $table->string('avatar')->nullable()->change();
            $table->timestamps('birth_date')->change();
            $table->dropColumn(
                        'education_end',
                        'specialization',
                        'company',
                        'degree',
                        'academic_rank',
                        'interests',
                        'is_member',
                        'other_organization',
                        'sign_for_news' );
        });
    }
};
