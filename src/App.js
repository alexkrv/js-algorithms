import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        //function f() {
        //  //return Array.isArray(arguments);
        //  //return Array.from(arguments)
        //    return Array.prototype.join.call(arguments);
        //
        //};
        //let obj = {test: "some1"},
        //    ar = [1,2,3, "a", "b"];
        //let tstArr = [1,2,ar],
        //    arr = tstArr.concat(ar);
            //ar[0] = "ERROR1";
        //console.log(tstArr[2], arr[2]);
        //console.log(Array.from([1,2,3], x => x+ 10));
        //console.log(Array.isArray(f(1,2,3)));
        //console.log([1,2,3].concat(["a","b","d"], "sdf", "sf", "23423", 777));


        //console.log(ar.includes("a",3));
        //console.log(f("a",1,2,4,"slkdjfs", 'this is the end'));

        //let ite = ar.keys();
        //console.log(ite.next());

        //let tmp = [].map.call("forward string", x => x).reverse().join();
        //console.log(tmp);

        //let obj1 = { name: 3, sn: 5},
        //    target = Object.assign({},obj1);
        //target.name = "sd";
        //
        //let fg = Object.create(null);
        //console.log(fg.hasOwnProperty("name"));
        //
        //console.log(obj1, target);


        function change(price, money){
            var change,	coins, result;
            coins = [1, 5, 10, 25, 50, 100].reverse();
            result = [];

            change = money - price;

            for(var i = 0; i < coins.length; i++){
                if(change%coins[i] > 0){
                    result.push(change%coins[i]);
                    change = change - (change%coins[i])*coins[i];
                }
            }


            return result;
        }

        console.log(change(857, 1000));

        class A {
            //constructor(){
                //super();
                //this.some = 1
            //}
            one(){
                console.log("one:A")
            }
        }

        var B = {
            __proto__: A.prototype,
            foo(){
                super.one()
                //this.one()
            },
            bar : function(){

                //super.two();
                this.one();
            }
        }

        console.log(B.foo())

        return (
          <div className="App">
              <button id="test">Click me</button>
          </div>
        );
    }
}

export default App;
