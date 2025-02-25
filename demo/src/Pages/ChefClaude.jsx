import { useState } from "react";
import Header from "../Components/ChefClaude/Header"


function ChefClaude() {

    // const ingredients = ["Chicken", "Oregano", "Tomatoes", "Flaour"]
    const [ingredients, setIngredients] = useState([]);

    const handleSubmitIngredients = (e) => {
        e.preventDefault();
        setIngredients((prev) => [...prev, e.target.ingredient.value]);
    };

    // function handleSubmit (event) {
    //     event.preventDefault(); // from this when click add ingrediant button didnt refresh browser. form didint resfresh or url didint change
    //     // alert("form submitted");

    //     const formData = new FormData(event.currentTarget);
    //     const newIngrediant = formData.get("ingrediant");
    //     ingredients.push(newIngrediant);
    //     console.log(ingredients);       
    // }

    

  return (
    <div className="w-3/4 md:w-1/2 lg:w-1/3 h-auto rounded-lg shadow-lg mx-auto  py-5 overflow-hidden bg-slate-100">
      <div>
        <Header />
      </div>
      <div className="px-5">
        {/* form */}
        <div>
          <form
            action=""
            onSubmit={handleSubmitIngredients}
            className="flex py-5 gap-2"
          >
            <input
              name="ingredient"
              type="text"
              placeholder="e.g: Orange"
              className="border-none bg-slate-50 p-1 rounded-md w-full"
            />
            <button className="text-white font-bold p-1 rounded-md bg-black">
              + Add ingrediants
            </button>
          </form>
        </div>

        {/* ingrdiants list */}
        <div className="p-5">
          <h1 className="font-bold text-3xl">Ingredians on hand :</h1>
          <ul className="p-5 list-disc">
            {ingredients.map((items) => (
              <li key={items} className="py-3">
                {items}
              </li>
            ))}
          </ul>
        </div>

        {/* get recipe */}
        <div className="bg-gray-200 p-3">
          <div className="flex flex-col gap-5 sm:flex-row">
            <div>
              <h1 className="font-bold text-lg px-2">Ready for a Reciepe?</h1>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div>
              <button className="bg-[#ae7261] p-4 rounded-lg font-semibold text-white">
                Get a recipe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChefClaude
