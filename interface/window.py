import webview

class Window:
    def __init__(self) -> None:
        self.window = webview.create_window(
            'BEATCORE',
            'interface/static/index.html',
            width=400, height=700,
            resizable=False,
        )
    
    def open(self):
        webview.start()

    def close(self):
        pass