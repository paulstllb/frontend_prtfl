<script>
    import { onMount } from 'svelte';

    let textVisible = false;

    onMount(() => {
        setTimeout(() => textVisible = true, 300);
    });
</script>

<style>
    .content {
        transition: opacity 1s ease-in-out;
        opacity: 0;
    }

    .content.visible {
        opacity: 1;
    }
</style>

<div class="min-h-screen  flex flex-col items-center justify-center text-center text-gray-800 text-base-content">
    <!-- Main content section -->
    <div class="content {textVisible ? 'visible' : ''} max-w-2xl px-4 py-8">
        <h1 class="text-4xl font-bold mb-6 text-primary">Welcome to My Portfolio</h1>
        <p class="text-lg text-gray-600 mb-8">
            This is a portfolio site of myself. The site was built with Svelte and SvelteKit, while the backend is powered by Go and MongoDB.
        </p>

        <!-- Skills Section -->
        <div class="card shadow-lg p-6 mb-8">
            <div class="card-body">
                <h2 class="text-xl font-bold text-primary">My Skills</h2>
                <ul class="list-disc list-inside text-left mt-4 text-gray-700">
                    <li><strong>Programmiersprachen:</strong> Python, TypeScript/JavaScript (Svelte, React), Java, C, Rust, SQL, MATLAB/Simulink, Git, LaTeX, Assembler, LISP</li>
                </ul>
            </div>
        </div>

        <!-- Projects Section -->
        <div class="card  shadow-lg p-6 mb-8">
            <div class="card-body">
                <h2 class="text-xl font-bold text-primary">Projekte</h2>
                <ul class="list-disc list-inside text-left mt-4 text-gray-700">
                    <li><strong>Klassifikation von Beweisaufgaben:</strong> Machine Learning im Bereich des Theorembeweisers E</li>
                    <li><strong>Digitaler Assistent:</strong> KI-Projekt mit Schwerpunkt Softwarearchitektur</li>
                    <li><strong>Verteiltes Canvas:</strong> Angelehnt an r/place mit Schwerpunkt Skalierung und Sicherheit</li>
                    <li><strong>Simulation eines Echtzeitsystems:</strong> Simulation eines Systems aus Prozessen und Connectoren</li>
                </ul>
            </div>
        </div>

        <!-- Work Experience Section -->
        <div class="card  shadow-lg p-6 mb-8">
            <div class="card-body">
                <h2 class="text-xl font-bold text-primary">Arbeitserfahrung</h2>
                <p class="text-left mt-4 text-gray-700">
                    <li>1,5 Jahre als dualer Student Arbeitserfahrung bei der <strong>EnBW</strong></li>
                    <li>Praktikum bei mps Solutions GmbH als Software Engineer</li>
                </p>
            </div>
        </div>
    </div>
</div>
