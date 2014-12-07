var oceny = ["Niedostateczny","Dopuszczający","Dostateczny","Dostateczny+","Dobry","Dobry+","Bardzo Dobry","Celujacy"];
            var progi = [39, 40, 50, 65, 70, 85, 90, 100];
                function onClickGo() {
                    var baza = document.getElementById("bazaIn").value
                    document.getElementById("bazaOut").innerHTML = "Baza wynosi: " + baza;
                    rysujTabele(baza);
                    alert("Done");
                }

                function rysujTabele(bazaPunktow) {
                    $("#oceny").empty();
                    for (var i = 0; i < oceny.length; i++) {
                        $("#oceny").append("<li><center>" + oceny[i] +" " + Math.round((bazaPunktow / 100) * progi[i]*100)/100 + "</center></li>");
                    }
                    $("#oceny").listview("refresh");
                }
                function licz() {
                    var iloscOcen = 0;
                    var bufer = 0;
                    for (var i = 1; i <= 3; i++) {
                        var tempString = $("#waga" + i).val().split(",");
                        for (var j = 0; j < tempString.length; j++) {
                            var tempInt = parseInt(tempString[j]);
                            if (tempInt > 0 && tempInt <= 6) {
                                if (tempString[j].length == 1) {
                                    bufer += tempInt * i;
                                } else {
                                    console.log(tempString[j]);
                                    bufer += (tempInt + (tempString[j][1] == "+" ? 0.5 : 0)) * i;
                                }
                                iloscOcen += 1 * i;
                            }
                        }
                    }
                    $("#srednia").html("Średnia wynosi: " + Math.round(bufer/iloscOcen*100)/100);
                }