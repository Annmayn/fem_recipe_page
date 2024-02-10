import OmeletteImage from "../../assets/images/image-omelette.jpeg";

const Recipe = () => {
  return (
    <div
      className="flex justify-center bg-eggshell text-normal md:px-8"
      style={{ width: "100vw" }}
    >
      <div className="flex flex-col gap-y-5 bg-white text-charcoal rounded-2xl md:my-48">
        <img
          className="self-center md:m-8 md:rounded-2xl"
          src={OmeletteImage}
          alt="omelette"
        />
        <div className="flex flex-col p-8 gap-y-5">
          <p className="font-sans font-semibold text-4xl md:text-7xl">
            Simple Omelette Recipe
          </p>
          <p>
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </p>
          <div className="bg-pink-50 p-7 rounded-md">
            <p className="text-2xl text-raspberry font-semibold mb-2">
              Preparation time
            </p>
            <ul
              className="ml-4"
              style={{
                listStyle: "disc outside",
                lineHeight: "35px",
              }}
            >
              <li>
                <span className="font-bold text-brown">Total</span>:
                Approximately 10 minutes
              </li>
              <li>
                <span className="font-bold text-brown">Preparation</span>: 5
                minutes
              </li>
              <li>
                <span className="font-bold text-brown">Cooking</span>: 5 minutes
              </li>
            </ul>
          </div>
          <p className="font-semibold text-nutmeg text-4xl font-sans">
            Ingredients
          </p>
          <ul
            className="ml-4"
            style={{
              listStyle: "disc outside",
              lineHeight: "35px",
            }}
          >
            <li>2-3 large eggs</li>
            <li>Salt, to taste</li>
            <li>Pepper, to taste</li>
            <li>1 tablespoon of butter or oil</li>
            <li>
              Optional fillings: cheese, diced vegetables, cooked meats, herbs
            </li>
          </ul>
          <hr className="border-gray border-1" />
          <p className="font-semibold text-nutmeg text-4xl font-sans">
            Instructions
          </p>
          <ol
            className="ml-4"
            style={{
              listStyle: "number outside",
            }}
          >
            <li className="mt-2">
              <span className="font-semibold">Beat the eggs</span>: In a bowl,
              beat the eggs with a pinch of salt and pepper until they are well
              mixed. You can add a tablespoon of water or milk for a fluffier
              texture.
            </li>
            <li className="mt-2">
              <span className="font-semibold">Heat the pan</span>: Place a
              non-stick frying pan over medium heat and add butter or oil.
            </li>
            <li className="mt-2">
              <span className="font-semibold">Cook the omelette</span>: Once the
              butter is melted and bubbling, pour in the eggs. Tilt the pan to
              ensure the eggs evenly coat the surface.
            </li>
            <li className="mt-2">
              <span className="font-semibold">Add fillings (optional)</span>:
              When the eggs begin to set at the edges but are still slightly
              runny in the middle, sprinkle your chosen fillings over one half
              of the omelette.
            </li>
            <li className="mt-2">
              <span className="font-semibold">Fold and serve</span>: As the
              omelette continues to cook, carefully lift one edge and fold it
              over the fillings. Let it cook for another minute, then slide it
              onto a plate.
            </li>
            <li className="mt-2">
              <span className="font-semibold">Enjoy</span>: Serve hot, with
              additional salt and pepper if needed.
            </li>
          </ol>
          <hr className="border-gray border-1" />
          <p className="font-semibold text-4xl text-nutmeg font-sans">
            Nutrition
          </p>
          <p>
            The table below shows nutritional values per serving without the
            additional fillings.
          </p>
          <table>
            <tbody className="divide-y-reverse divide-y-2 divide-gray leading-10">
              <tr></tr>
              <tr>
                <td>Calories</td>
                <td className="font-semibold text-nutmeg">277kcal</td>
              </tr>
              <tr>
                <td>Carbs</td>
                <td className="font-semibold text-nutmeg">0g</td>
              </tr>
              <tr>
                <td>Protein</td>
                <td className="font-semibold text-nutmeg">20g</td>
              </tr>
              <tr>
                <td>Fat</td>
                <td className="font-semibold text-nutmeg">22g</td>
              </tr>
            </tbody>
          </table>
          <div className="mt-10 flex justify-between">
            <div>
              <span>Challenge by </span>
              <a
                href="https://www.frontendmentor.io?ref=challenge"
                target="_blank"
                className="whitespace-nowrap"
              >
                Frontend Mentor
              </a>
            </div>
            <div>
              <span>Coded by </span>
              <a href="https://github.com/annmayn">Neema</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
