<script lang="ts">
    import Navbar from "$lib/components/Navbar.svelte";
</script>

{#snippet Image(id: number)}
    {#await import(`$lib/images/1/${id}.png`) then { default: image } }
        <img alt="" class="self-center w-min h-auto max-w-[85%]" src={image}>
    {/await}
{/snippet}

<Navbar name="Любое число из четырех двоек"></Navbar>
<article class="animate-fade-in-scale flex flex-col bg-secondary w-[85%] md:w-[50%] h-fit mx-auto mb-10 rounded-md">
    <p class="m-8 text-text text-lg md:text-xl font-jetbrains">
        Есть одна математическая задачка, которая может быть интересна людям на очень разных уровнях:<br>
        <br>
        "У вас есть четыре двойки и какое-то целевое натуральное число. При помощи любых математических операций сгенерируйте целевое число при помощи этих двоек, не используя больше никаких цифр."<br>
        <br>
        Некоторые примеры могут придумать и дети из начальной школы:<br>
    </p>
    
    {@render Image(1)}
    <p class="m-8 text-text text-lg md:text-xl font-jetbrains">
        В средних классах дети узнают о степенях, факториалах и так далее, что существенно расширяет диапазон:<br>
    </p>
    {@render Image(2)}
    <p class="m-8 text-text text-lg md:text-xl font-jetbrains">
        А потом уже идут хитрости; например, число 22 (двадцать два) можно считать допустимым использованием двух двоек и так далее; так что можно записать:
    </p>
    {@render Image(3)}
    <p class="m-8 text-text text-lg md:text-xl font-jetbrains">
        Известно, что получить 7 очень сложно, но если допустить применение ещё более математических инструментов, например, гамма-функции, то всё становится просто:<br>
    </p>
    {@render Image(4)}
    <p class="m-8 text-text text-lg md:text-xl font-jetbrains">
        Так что эта задача не перестаёт быть интересной даже после того, как защитишь диплом в университете! На самом деле, это, похоже, было любимым досугом математиков в 1920-х. Но потом Поль Дирак всё испортил, найдя общее решение для любого числа.<br><br>
        Всё дело во вложенных квадратных корнях:<br>
    </p>
    {@render Image(5)}
    <p class="m-8 text-text text-lg md:text-xl font-jetbrains">
        Если применить квадратный корень n раз:<br>
    </p>
    {@render Image(6)}
    <p class="m-8 text-text text-lg md:text-xl font-jetbrains">
        То остаётся лишь использовать логарифмы по основанию 2:<br>
    </p>
    {@render Image(7)}
    <p class="m-8 text-text text-lg md:text-xl font-jetbrains">
        И ещё раз:<br>
    </p>
    {@render Image(8)}
    <p class="m-8 text-text text-lg md:text-xl font-jetbrains">
        Так мы приходим к общей формуле:<br>
    </p>
    {@render Image(9)}
    <p class="m-8 text-text text-lg md:text-xl font-jetbrains">
        Тут есть лишь один небольшой изъян: используется не четыре, а три двойки. Впрочем, это легко исправить. Так как<br>
    </p>
    {@render Image(10)}
    <p class="m-8 text-text text-lg md:text-xl font-jetbrains">
        мы можем заменить любую цифру на это выражение и получить ровно четыре двойки:<br>
    </p>
    {@render Image(11)}
    <p class="m-8 text-text text-lg md:text-xl font-jetbrains">
        Кто-то может сказать, что это жульничество, но всё соответствует правилам задачки! Стоит отметить, что сущность n на самом деле нигде не встречается — это лишь вспомогательное обозначение числа повторяющихся квадратных корней. Вот, например, ещё один способ выразить 7:<br>
    </p>
    {@render Image(12)}
    <p class="m-8 text-text text-lg md:text-xl font-jetbrains">
        Здесь ровно четыре двойки и при этом для вычислений используется только приемлемые элементарные математические операции. Очевидно, таким образом можно выразить любое число; самое сложное — писать все эти квадратные корни!
        <br>
        <br>
        <a class="text-accent underline hover:text-text" href="https://eli.thegreenplace.net/2025/making-any-integer-with-four-2s/">
            Источник
        </a>
    </p>
</article>
<a href="/" class="flex items-center justify-center w-[85%] md:w-[50%] h-16 mx-auto m-8 bg-secondary rounded-md align-middle text-center text-text text-xl font-bold font-jetbrains transition-all hover:bg-accent hover:text-secondary">
    Вернуться на главную
</a>