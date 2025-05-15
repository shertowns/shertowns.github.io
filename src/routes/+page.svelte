<script lang="ts">
    import Navbar from "$lib/components/Navbar.svelte";

    type ArticleData = {
        id: number
        pageLink: string
        title: string
        subtitle: string
    }

    const articles: ArticleData[] = [
        {
            id: 1, 
            pageLink: "/every-number-as-four-twos", 
            title: "Любое число из четырех двоек", 
            subtitle: "Задача, актуальная на любом уровне обучения"
        },
        {
            id: 2,
            pageLink: "/125-year-old-problem",
            title: "Задача 125-летней давности",
            subtitle: "Математическая задача, решенная физикой"
        },
        {
            id: 3,
            pageLink: "/gpt-solves-ege",
            title: "GPT решает профильную маетматику",
            subtitle: "..."
        },
        {
            id: 4,
            pageLink: "/i-use-zip-bombs",
            title: "Защита сервера zip-бомбой",
            subtitle: "Странный метод"
        },
        {
            id: 5,
            pageLink: "/world-is-losing-color",
            title: "Мир теряет цвет",
            subtitle: "..."
        }

    ]

    let page = $state(0)
    
    function pageChange(sign: boolean): void {
        if (sign) {
            if (page + 1 > Math.ceil(articles.length / 4) - 1) {
                page = 0
            } else {
                page++
            }
        } else {
            if (page - 1 < 0) {
                page = Math.ceil(articles.length / 4) - 1
            } else {
                page--
            }
        }
    }

</script>

{#snippet articleCard(articleData: ArticleData)}
    {#if articleData != undefined}
    <a id={`article${articleData.id}`} href="{articleData.pageLink}" class="animate-fade-in-scale flex flex-col w-[49%] h-60 bg-secondary rounded-md overflow-hidden cursor-pointer transition-all group hover:bg-accent">
        {#await import(`$lib/images/${articleData.id}/preview.jpg`) then { default: image } }
            <img class="w-full h-[70%] m-auto mask-b-from-60% mask-b-to-100%" src={image} alt="картинка">
        {/await}
        <p class="text-accent text-md md:text-xl text-center font-jetbrains font-bold mx-auto my-4 md:mt-4 md:mb-0 transition-all group-hover:text-secondary">{articleData.title}</p>
        <p class="text-text collapse md:visible text-md font-jetbrains text-center font-bold mx-auto mb-4 transition-all group-hover:text-secondary">{articleData.subtitle}</p>
    </a>
    {:else}
    <div class="w-[49%] h-60 opacity-0">
    </div>
    {/if}
{/snippet}

<Navbar name="Главная"></Navbar>
<main class="flex flex-col gap-4 w-[85%] mx-auto md:w-[50%]">
    <section class="animate-fade-in-scale flex flex-col gap-4 items-center justify-center w-full h-40 bg-secondary rounded-md">
        <p class="text-accent text-xl text-center font-jetbrains font-bold md:text-3xl">Сборник интересных статей</p>
        <p class="text-text text-xl font-jetbrains font-bold">(для школьного проекта)</p>
    </section>
    <div class="animate-fade-in-scale flex items-center justify-center w-full py-4 bg-secondary rounded-md">
        <p class="text-text text-xl font-jetbrains font-bold">Статьи</p>
    </div>
    <section class="flex flex-wrap gap-y-4 gap-[2%] w-full h-fit rounded-md">
        {#each {length: 4}, index}
            {@const articleData = articles[index + 4 * page]}
            {@render articleCard(articleData)}
        {/each}
    </section>
    <div class="mb-8 animate-fade-in-scale flex items-center justify-center overflow-hidden w-full h-12 bg-secondary rounded-md">
        <button onclick={() => {pageChange(false)}} class="h-full w-[30%] rounded-md transition-all cursor-pointer group hover:bg-accent">
            <p class="text-text text-xl font-jetbrains font-bold transition-all group-hover:text-secondary">
                &lt;
            </p>
        </button>
        <div class="h-full flex-1 flex items-center justify-center">
            <p class="text-text text-xl font-jetbrains text-center font-bold">{page + 1}/{Math.ceil(articles.length / 4)}</p>
        </div>
        <button onclick={() => {pageChange(true)}} class="h-full w-[30%] rounded-md transition-all cursor-pointer group hover:bg-accent">
            <p class="text-text text-xl font-jetbrains font-bold transition-all group-hover:text-secondary">
                &gt;
            </p>
        </button>
    </div>
</main>