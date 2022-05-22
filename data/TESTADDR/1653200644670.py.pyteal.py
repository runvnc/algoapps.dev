from pyteal import *

globals().update(TealType.__members__)

def app():
    return If( args_[0] == Bytes('hello'), 
          Return( Int(1) )
        , 
          Return( Int(0) )
    
       )

if __name__ == "__main__":
    print(compileTeal(app(), mode=Mode.Application, version=6))
