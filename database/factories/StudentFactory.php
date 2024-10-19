<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Student>
 */
class StudentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->name(),
            'age' => $this->faker->numberBetween(18, 21),
            'sex' => $this->faker->randomElement(['Male', 'Female']),
            'email' => $this->faker->unique()->safeEmail(),
            'avatar' => $this->faker->imageUrl(640, 480, 'people'),
        ];
    }
}
