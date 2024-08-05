import imageOmelette from './assets/image-omelette.jpeg'

export function App() {
  return (
    <main className="w-full max-w-3xl mx-auto my-32 p-10 bg-white rounded-3xl max-md:rounded-none max-md:my-0 max-md:p-0 max-md:pb-7">
      <img
        src={imageOmelette}
        alt="Simple Omelette Image"
        className="rounded-xl max-md:rounded-none"
      />
      <div className="max-md:px-8">
        <h1 className="font-serif text-4xl text-stone-900 mt-10 leading-none max-md:text-3xl">
          Simple Omelette Recipe
        </h1>
        <p className="mt-4 leading-6">
          An easy and quick dish, perfect for any meal. This classic omelette
          combines beaten eggs cooked to perfection, optionally filled with your
          choice of cheese, vegetables, or meats.
        </p>

        <section className="bg-rose-50 rounded-xl px-7 py-6 mt-8 max-md:px-6 max-md:py-5">
          <strong className="font-semibold text-lg text-rose-800">
            Preparation time
          </strong>
          <ul className="mt-3.5 ml-2">
            <li className="flex gap-5 items-center">
              <strong className="text-rose-800 font-semibold select-none">
                •
              </strong>
              <span>
                <strong className="font-semibold">Total: </strong>Approximately
                10 minutes
              </span>
            </li>
            <li className="mt-2 flex gap-5 items-center">
              <strong className="text-rose-800 font-semibold select-none">
                •
              </strong>
              <span>
                <strong className="font-semibold">Preparation: </strong>5
                minutes
              </span>
            </li>
            <li className="mt-2 flex gap-5 items-center">
              <strong className="text-rose-800 font-semibold select-none">
                •
              </strong>
              <span>
                <strong className="font-semibold">Cooking: </strong>5 minutes
              </span>
            </li>
          </ul>
        </section>

        <section className="mt-6">
          <h3 className="font-serif text-brown-800 text-2xl">Ingredients</h3>
          <ul className="mt-4 ml-2">
            <li className="flex gap-5 items-center">
              <strong className="text-brown-800 font-semibold select-none">
                •
              </strong>
              2-3 large eggs
            </li>
            <li className="mt-2 flex gap-5 items-center">
              <strong className="text-brown-800 font-semibold select-none">
                •
              </strong>
              Salt, to taste
            </li>
            <li className="mt-2 flex gap-5 items-center">
              <strong className="text-brown-800 font-semibold select-none">
                •
              </strong>
              Pepper, to taste
            </li>
            <li className="mt-2 flex gap-5 items-center">
              <strong className="text-brown-800 font-semibold select-none">
                •
              </strong>
              1 tablespoon of butter or oil
            </li>
            <li className="mt-2 flex gap-5 items-center">
              <strong className="text-brown-800 font-semibold select-none">
                •
              </strong>
              Optional fillings: cheese, diced vegetables, cooked meats, herbs
            </li>
          </ul>
        </section>

        <hr className="mt-8 border-stone-150" />

        <section className="mt-6">
          <h3 className="font-serif text-brown-800 text-2xl">Instructions</h3>
          <ol className="mt-4 ml-2">
            <li className="flex gap-5">
              <strong className="text-brown-800 font-semibold select-none">
                1.
              </strong>
              <span>
                <strong className="font-semibold">Beat the eggs: </strong>In a
                bowl, beat the eggs with a pinch of salt and pepper until they
                are well mixed. You can add a tablespoon of water or milk for a
                fluffier texture.
              </span>
            </li>
            <li className="flex gap-5 mt-2">
              <strong className="text-brown-800 font-semibold select-none">
                2.
              </strong>
              <span>
                <strong className="font-semibold">Heat the pan: </strong>Place a
                non-stick frying pan over medium heat and add butter or oil.
              </span>
            </li>
            <li className="flex gap-5 mt-2">
              <strong className="text-brown-800 font-semibold select-none">
                3.
              </strong>
              <span>
                <strong className="font-semibold">Cook the omelette: </strong>
                Once the butter is melted and bubbling, pour in the eggs. Tilt
                the pan to ensure the eggs evenly coat the surface.
              </span>
            </li>
            <li className="flex gap-5 mt-2">
              <strong className="text-brown-800 font-semibold select-none">
                4.
              </strong>
              <span>
                <strong className="font-semibold">
                  Add fillings (optional):{' '}
                </strong>
                When the eggs begin to set at the edges but are still slightly
                runny in the middle, sprinkle your chosen fillings over one half
                of the omelette.
              </span>
            </li>
            <li className="flex gap-5 mt-2">
              <strong className="text-brown-800 font-semibold select-none">
                5.
              </strong>
              <span>
                <strong className="font-semibold">Fold and serve: </strong>As
                the omelette continues to cook, carefully lift one edge and fold
                it over the fillings. Let it cook for another minute, then slide
                it onto a plate.
              </span>
            </li>
            <li className="flex gap-5 mt-2">
              <strong className="text-brown-800 font-semibold select-none">
                6.
              </strong>
              <span>
                <strong className="font-semibold">Enjoy: </strong>Serve hot,
                with additional salt and pepper if needed.
              </span>
            </li>
          </ol>
        </section>

        <hr className="mt-8 border-stone-150" />

        <section className="mt-6">
          <h3 className="font-serif text-brown-800 text-2xl">Nutrition</h3>
          <p className="mt-4 leading-6">
            The table below shows nutritional values per serving without the
            additional fillings.
          </p>
          <table className="min-w-full mt-3">
            <tbody className="divide-y divide-stone-150">
              <tr>
                <th scope="row" className="py-3 px-8 text-left font-normal">
                  Calories
                </th>
                <td className="py-3 px-8 font-semibold text-brown-800">
                  277kcal
                </td>
              </tr>
              <tr>
                <th scope="row" className="py-3 px-8 text-left font-normal">
                  Carbs
                </th>
                <td className="py-3 px-8 font-semibold text-brown-800">0g</td>
              </tr>
              <tr>
                <th scope="row" className="py-3 px-8 text-left font-normal">
                  Protein
                </th>
                <td className="py-3 px-8 font-semibold text-brown-800">20g</td>
              </tr>
              <tr>
                <th scope="row" className="py-3 px-8 text-left font-normal">
                  Fat
                </th>
                <td className="py-3 px-8 font-semibold text-brown-800">22g</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </main>
  )
}
