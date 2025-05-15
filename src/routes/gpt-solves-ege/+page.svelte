<script lang="ts">
    import { base } from "$app/paths";
    import Navbar from "$lib/components/Navbar.svelte";
</script>

{#snippet Image(id: number)}
    {#await import(`$lib/images/3/${id}.png`) then { default: image } }
        <img alt="" class="m-8 self-center w-min h-auto max-w-[85%]" src={image}>
    {/await}
{/snippet}

<Navbar name="GPT решает профильную математику"></Navbar>
<article class="animate-fade-in-scale flex flex-col bg-secondary w-[85%] md:w-[50%] h-fit mx-auto mb-10 rounded-md">
    <p class="m-8 text-text text-lg md:text-xl font-jetbrains">
        Мне давно хотелось проверить текущий уровень языковых моделей от OpenAI на целом наборе математических задач, только на уровне ЕГЭ.
        <br>
        <br>
        Я уже имею достаточно большой опыт работы с GPT-o3-mini high, даже та модель справлялась с задачами олимпиадного уровня, о чём будет дальнейшая статья (надеюсь).
        <br>
        <br>
        Но сейчас про ЕГЭ. Как многие знают, профильный ЕГЭ по математике делится на 2 части: 1 с кратким ответом и 2-ая, где необходимо полное и обоснованное решение.
    </p>
    <p class="mx-8 my-0 text-center text-accent text-2xl font-bold font-jetbrains">
        1 часть.
    </p>
    <p class="m-8 text-text text-lg md:text-xl font-jetbrains">
        Здесь GPT сделал 3 ошибки: во 2, 8 и 11 задачах. Рассмотрим сначала эти задачи
        <br>
        <br>
        2 задание
    </p>
    {@render Image(1)}
    <p class="m-8 text-text text-lg md:text-xl font-jetbrains">
        Вот, что ответила модель GPT-o4 mini high:
    </p>
    {@render Image(2)}
    <p class="m-8 text-text text-lg md:text-xl font-jetbrains">
        Как можно наблюдать, анализ изображения дал неверные координаты точек начала и конца векторов. Однако стоит сказать, что если бы я указал точные координаты векторов он бы точно решил данную задачу.
        <br>
        <br>
        8 задание
        <br>
        <br>
        В данном задании всего-то нужно было найти такие точки, y которых положителен. Именно из-за того, что с анализом самого графика у модели имеются проблемы -данную задачу тоже не удалось решить 
    </p>
    {@render Image(3)}
    <p class="m-8 text-text text-lg md:text-xl font-jetbrains">
        Решение
    </p>
    {@render Image(4)}
    <p class="m-8 text-text text-lg md:text-xl font-jetbrains">
        Последнее задание, где была ошибка, также на графике:
    </p>
    {@render Image(5)}
    <p class="m-8 text-text text-lg md:text-xl font-jetbrains">
        Здесь была настоящая галлюцинация: анализ изображения показал фантомную точку B:
    </p>
    {@render Image(6)}
    <p class="m-8 text-text text-lg md:text-xl font-jetbrains">
        Остальные задачи на вычисления были решены абсолютно верно, с чем можно поздравить модель!
    </p>
    <p class="mx-8 text-center text-accent text-2xl font-bold font-jetbrains">
        2 часть.
    </p>
    <p class="m-8 text-text text-lg md:text-xl font-jetbrains">
        Во второй части как таковых ошибок не было, ведь все задачи были даны не в графике (даже планиметрия интерпретировалась через текстовое условие). Разберём все задачи.
        <br>
        <br>
        Изначально в чате был дан следующий промпт:
        <br>
        <br>
        "Привет, реши задачу, критерии записи решения на картинке. поставь в конце себе балл за решение"
        <br>
        <br>
        Также каждый раз я прикреплял фото задачи и критериев к решению, чтобы ответ был максимально соответствующим требованиям.
        <br>
        <br>
        13 задание
    </p>
    {@render Image(7)}
    {@render Image(8)}
    {@render Image(9)}
    {@render Image(10)}
    <p class="m-8 text-text text-lg md:text-xl font-jetbrains">
        14 задание
    </p>
    {@render Image(11)}
    {@render Image(12)}
    {@render Image(13)}
    <p class="m-8 text-text text-lg md:text-xl font-jetbrains">
        Пункт б) языковая модель каким-то образом довела до правильного ответа, но значение стороны LP оказалось неверным, возможно здесь GPT "решил" подвести решение к верному ответу.
        <br>
        <br>
        Итого по критериям оценивания ставлю 1 балл из 3 за неверное нахождение площади сечения.
        <br>
        <br>
        15 задание
    </p>
    {@render Image(14)}
    {@render Image(15)}
    {@render Image(16)}
    <p class="m-8 text-text text-lg md:text-xl font-jetbrains">
        16 задание
    </p>
    {@render Image(17)}
    {@render Image(18)}
    <p class="m-8 text-text text-lg md:text-xl font-jetbrains">
        Ответ получился верным, решение частично совпадает с фипишным решением.
    </p>
    {@render Image(19)}
    {@render Image(20)}
    <p class="m-8 text-text text-lg md:text-xl font-jetbrains">
        В данной задаче поначалу были сомнения, поскольку было трудно представить, что модель способна "представить" геометрическую задачу и разобраться в ней. Опасения были напрасны, пункты а и б решены полностью:
    </p>
    {@render Image(21)}
    <p class="m-8 text-text text-lg md:text-xl font-jetbrains">
        В пункте б использована теорема Птолемея без доказательств, по данному источнику так можно, значит решение считается верным. 
        <br>
        <br>
        18 задание
    </p>
    {@render Image(22)}
    <p class="m-8 text-text text-lg md:text-xl font-jetbrains">
        Модель разбивает решение задачи на 2 случая, что вполне логично:
    </p>
    {@render Image(23)}
    {@render Image(24)}
    {@render Image(25)}
    <p class="m-8 text-text text-lg md:text-xl font-jetbrains">
        19 задание
    </p>
    {@render Image(26)}
    <p class="m-8 text-text text-lg md:text-xl font-jetbrains">
        Решение данной задачи вызывает трудности у учеников с обычным уровнем подготовки, однако GPT справляется со всеми пунктами:
    </p>
    {@render Image(27)}
    {@render Image(28)}
    <p class="mx-8 text-center text-accent text-2xl font-bold font-jetbrains">
        Выводы
    </p>
    <p class="m-8 text-text text-lg md:text-xl font-jetbrains">
        Как можно заметить, текущая версия GPT o4-mini-high хорошо справляется с задачами по профильной математике, однако только с теми, в которых чётко прописано условие и нет прямой задачи с анализом именно изображения. На данный момент могу рекомендовать самостоятельный анализ изображения, например, как во 2-м задании с векторами - вручную писать координаты векторов, либо использовать другие модели. В 8 задаче также - можно спросить, например, какие точки должны подходить и уже самому находить их. В 11 задаче рекомендую сначала спросить: "что нужно для точного решения", а затем уже писать координаты точек параболы и функции прямой.
        <br>
        <br>
        Со 2-й частью модель справилась (за исключением пункта б 14 задачи), виден большой потенциал в решении более сложных задач.
    </p>
    <p class="mx-8 text-center text-accent text-2xl font-bold font-jetbrains">
        Баллы за решения
    </p>
    <p class="m-8 text-text text-lg md:text-xl font-jetbrains">
        Итого за 1 и 2 часть модель набрала 27 первичных баллов из 32 (3 балла сняты за неверные решения 3-х задач 1 части и 2 за неправильно решённый пункт б 14 задачи).
        <br>
        <br>
        Если переводить в тестовый балл - это 97 баллов.
        <br>
        <br>
        <a class="text-accent underline hover:text-text" href="https://habr.com/ru/articles/906406/">
            Источник
        </a>
    </p>
</article>
<a href="{base}/" class="flex items-center justify-center w-[85%] md:w-[50%] h-16 mx-auto m-8 bg-secondary rounded-md align-middle text-center text-text text-xl font-bold font-jetbrains transition-all hover:bg-accent hover:text-secondary">
    Вернуться на главную
</a>