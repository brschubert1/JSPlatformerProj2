var GAME_LEVELS = [
  [
   "  x                                                            xxxxxxxxxxxxxxxxx  ",
   "  x                                                           xxxxxxxxxxxxxxxxxx  ",
   "  x                                                          xxxxxxxxxxxxxxxxxxx  ",
   "  x                                                         xxxxxxxxxxxxxxxxxxxx  ",
   "  x                                                        xxxxxxxxxxxxxxxxxxxxx  ",
   "  x                                                       xxxxxxxxxxxxxxxxxxxxxx  ",
   "  x                                o                      xxxxxxxxxxxxxxxxxxxxxx  ",
   "  x                              xxxxx                    xxxxxxxxxxxxxxxxxxxxxx  ",
   "  x                              xxxxx                    xxxxxxxxxxxxxxxxxxxxxx  ",
   "  x                        xx    xxxxx                    !!!!v!!!!!v!!!!v!!!v!x  ",
   "  x                 o      xx    xxxxx                                         x  ",
   "  x               xxxxx    xx    xxxxx              o                          x  ",
   "  x               xxxxx    xx    xxxxx                                         x  ",
   "  x               xxxxx    xx    xxxxx                                         x  ",
   "  x  @ 0   o      xxxxx    xx    xxxxx                                o        x  ",
   "  xxxxxxxxxxxxxxxxxxxxxxxxxxx!!!!xxxxxxxxxxxxxx!!!!!!xxxxxxxxxxxxxxxxxxxxxxxxxxx  ",
   "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  ",
   "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  ",
   "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  ",
   "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  ",
   "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  ",
   "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  "],
   [
    "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  ",
    "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  ",
    "  x             ooo         ooo         ooo         ooo                        x  ",
    "  x           ooo ooo     ooo ooo     ooo ooo     ooo ooo                      x  ",
    "  x         ooo     ooo ooo     ooo ooo     ooo ooo     ooo                    x  ",
    "  x>      ooo         ooo         ooo         ooo         ooo  0               x  ",
    "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx            x  ",
    "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx          o x  ",
    "  x                                                                          xxx  ",
    "  x                                                                          xxx  ",
    "  x                                                                          xxx  ",
    "  x                                                                          xxx  ",
    "  x                                                                        xxxxx  ",
    "  x                                                                        xxxxx  ",
    "  x  @  0     o                        o                           o       xxxxx  ",
    "  xxxxxxxxxxxxxxxxx!!!!!!!!!!!!!!xxxxxxxxxxxxxx!!!!!!!!!!!!!!xxxxxxxxxxxxxxxxxxx  ",
    "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  ",
    "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  ",
    "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  ",
    "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  ",
    "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  ",
    "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  "],
    [
     "  xxxxxx                                                                       x  ",
     "  xxxxxx                                                                       x  ",
     "  xxxxxx                                          =                            x  ",
     "  xxxxxx                              o                    =                   x  ",
     "  xxxxxx           =                  o                                        x  ",
     "  xxxxxx=                             o                   0                   ox  ",
     "  xxxxxx                             xxx                  xxxxxxxxxxxxxxxxxxxxxx  ",
     "  xxxxxx                       xxx         xxx                              v  x  ",
     "  xxxxx                   0 !!!!!!!!!!!!!!!!!!!!!!                             x  ",
     "  xxxx                    xxxxxxxxxxxxxxxxxxxxxxxxxx                           x  ",
     "  xxx                             x                                            x  ",
     "  xx                  !           x                  0                         x  ",
     "  x                  x!x          x        xxxxxxxxxxxxxxxx    xxxx    xxx     x  ",
     "  x       o    o    x!v!x         x          x!!xxx>                     xx    x  ",
     "  x      xxxxxxxxxxx!! !!xxxxxx  xx o        x!!xx>                      x     x  ",
     "  x      x                       xxxxxxx     x!!x>                       x     x  ",
     "  x      x                       xx          x!x>                        x     x  ",
     "  x      x     xxxxxxxxxxxxxxxxxxxx     |  o xx>                         x    xx  ",
     "  xx     x     !!v!!!!!v!!!!      x    xxxxxxx                           x     x  ",
     "  x      x                        x    x!!!!!!!                          x     x  ",
     "  x      x                             x!!!!!!!!                         x     x  ",
     "  x  @   x           =      o        o x!!!!!!!!!                        xx o  x  ",
     "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxx   xxxxxxxxxxxxxxxxxxxx     xxxxxxxxxxxxxxxxxxxxx  ",
     "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxx   xxxxxxxxxxxxxxxxxxxx     xxxxxxxxxxxxxxxxxxxxx  ",
     "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxx!!!xxxxxxxxxxxxxxxxxxxx!! !!xxxxxxxxxxxxxxxxxxxxx  ",
     "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxx!!!xxxxxxxxxxxxxxxxxxxx!! !!xxxxxxxxxxxxxxxxxxxxx  ",
     "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxx  ",
     "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  o  xxxxxxxxxxxxxxxxxxxxx  ",
     "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  "],
       [
        "  x                                                                            x  ",
        "  x                                                                            x  ",
        "  x                                                                            x  ",
        "  x                                                                            x  ",
        "  x               xxx  xxxxxxxxxxxx  xxxxxxxxxx  xxxxxxxxxx  xxxx              x  ",
        "  x            x                                                      x        x  ",
        "  x                   0   0   0  0  0   0  0   0  00000  0000   0              x  ",
        "  x     x             0   0   0  0  00  0  00  0  0      0   0  0              x  ",
        "  x                    0 0 0 0   0  0 0 0  0 0 0  00000  0000   0          x   x  ",
        "  x                    0 0 0 0   0  0  00  0  00  0      0  0                  x  ",
        "  x        x            0   0    0  0   0  0   0  00000  0   0  0              x  ",
        "  x                                                                     x      x  ",
        "  x             x                                                              x  ",
        "  x                                                               x            x  ",
        "  x      @                                                                     x  ",
        "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  ",
        "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  ",
        "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  ",
        "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  ",
        "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  ",
        "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  ",
        "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  "]
];

if (typeof module != "undefined" && module.exports)
  module.exports = GAME_LEVELS;
