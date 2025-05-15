<script lang="ts">
    let { name } = $props()

    if (name == undefined) {
        name = "fallback"
    }

    let displayName = $state("...")
    
    for (let i = 0; i < name.length; i++) {
        setTimeout(() => {
            displayName = name.slice(0, i + 1)
        }, (i + 1) * 100)
    }
    
</script>

<nav class="animate-fade-in-scale flex items-center justify-center mx-auto w-[85%] my-8 md:w-[50%]">
    <div class="bg-secondary mx-auto py-2 w-full rounded-md">
        <p class="text-accent text-xl text-center font-jetbrains font-bold mx-8">{displayName}</p>
    </div>
</nav>