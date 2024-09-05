<script>
  import "../../app.css";
  import { email, password } from "$lib/stores.js";
  import { onMount } from 'svelte';

  let responseMessage = '';

  async function handleSubmit(event) {
      // Verhindern des Standardverhaltens des Formulars
      event.preventDefault();

      // Erstellen des Request-Bodys
      const body = {
          username: $email,
          password: $password
      };

      try {
          const response = await fetch('http://localhost:3000/signup', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(body)
          });

          if (response.ok) {
              const result = await response.json();
              responseMessage = `Login successful: ${result.message}`;
          } else {
              responseMessage = 'Login failed. Please try again.';
          }
      } catch (error) {
          responseMessage = `Error: ${error.message}`;
      }
  }
</script>

<div class="hero bg-base-200 min-h-screen">
  <div class="hero-content flex-col lg:flex-row-reverse">
      <div class="text-center lg:text-left">
          <h1 class="text-5xl font-bold">Login now!</h1>
          <p class="py-6">
              Don't have an account? <a href="#" class="link link-hover">Sign up</a>
          </p>
      </div>
      <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form class="card-body" method="POST" on:submit={handleSubmit}>
              <div class="form-control">
                  <label class="label">
                      <span class="label-text">Email</span>
                  </label>
                  <input type="email" placeholder="email" class="input input-bordered" bind:value={$email} required />
              </div>
              <div class="form-control">
                  <label class="label">
                      <span class="label-text">Password</span>
                  </label>
                  <input type="password" placeholder="password" class="input input-bordered" bind:value={$password} required />
                  <label class="label">
                      <a href="/lost" class="label-text-alt link link-hover">Forgot password?</a>
                  </label>
              </div>
              <div class="form-control mt-6">
                  <button type="submit" class="btn btn-primary">Login</button>
              </div>
          </form>
          {#if responseMessage}
              <p class="mt-4 text-center">{responseMessage}</p>
          {/if}
      </div>
  </div>
</div>
