package com.example.android.stones;

import android.graphics.Color;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.LinearLayout;
import android.widget.ListView;
import android.widget.TextView;

import java.util.ArrayList;
import java.util.List;

public class MainActivity extends AppCompatActivity {
    Button choose;
    Button reset;
    TextView update;
    TextView finish;
    ListView list;
    LinearLayout mommy;
    ArrayList<String> arrayList;
    ArrayAdapter<String> adapter;
    boolean vis[];



    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        choose = (Button) findViewById(R.id.choose);
        reset = (Button) findViewById(R.id.reset);
        update = (TextView) findViewById(R.id.update);
        finish = (TextView) findViewById(R.id.finish);
        list = (ListView) findViewById(R.id.list);
        mommy = (LinearLayout) findViewById(R.id.mommy);
        arrayList = new ArrayList<String>();
        adapter = new ArrayAdapter<String>(MainActivity.this, android.R.layout.simple_list_item_1,arrayList);
        list.setAdapter(adapter);
        vis = new boolean[6];
        for(int i=0; i<6; i++)
            vis[i] = false;
    }

    public void choosefn(View view)
    {
        finish.setText("");
        int rand = (int)(Math.random()*6) + 1;
        if(rand==1)
        {
            update.setText("You have got the Power Stone");
            mommy.setBackgroundColor(Color.parseColor("#9932CC"));
            arrayList.add("Power Stone");
            adapter.notifyDataSetChanged();
            vis[0] = true;
        }
        else if(rand==2)
        {
            update.setText("You have got the Space Stone");
            mommy.setBackgroundColor(Color.parseColor("#40B1CF"));
            arrayList.add("Space Stone");
            adapter.notifyDataSetChanged();
            vis[1] = true;
        }
        else if(rand==3)
        {
            update.setText("You have got the Time Stone");
            mommy.setBackgroundColor(Color.parseColor("#00FF00"));
            arrayList.add("Time Stone");
            adapter.notifyDataSetChanged();
            vis[2] = true;
        }
        else if(rand==4)
        {
            update.setText("You have got the Reality Stone");
            mommy.setBackgroundColor(Color.parseColor("#EE3B3B"));
            arrayList.add("Reality Stone");
            adapter.notifyDataSetChanged();
            vis[3] = true;
        }
        else if(rand==5)
        {
            update.setText("You have got the Soul Stone");
            mommy.setBackgroundColor(Color.parseColor("#FF7F24"));
            arrayList.add("Soul Stone");
            adapter.notifyDataSetChanged();
            vis[4] = true;
        }
        else if(rand==6)
        {
            update.setText("You have got the Mind Stone");
            mommy.setBackgroundColor(Color.parseColor("#EEAD0E"));
            arrayList.add("Mind Stone");
            adapter.notifyDataSetChanged();
            vis[5] = true;
        }
        boolean flag = true;
        for(int i=0; i<6; i++)
            if(!vis[i])
                flag = false;
        if(flag)
        {
            finish.setText("You got all the stones! Woo hoo");
            arrayList.clear();
            adapter.notifyDataSetChanged();
            for(int i=0; i<6; i++)
                vis[i] = false;
        }

    }

    public void resetfn(View view)
    {
        arrayList.clear();
        adapter.notifyDataSetChanged();
        for(int i=0; i<6; i++)
            vis[i] = false;
    }
}
